import { User } from "../models/user.model.js";
import jwt, { decode } from "jsonwebtoken";
import {redis} from "../lib/redis.js"

const generateTokens = (userId) => {
    const accessToken = jwt.sign(
        {
            userId
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );

    const refreshToken = jwt.sign(
        {
            userId
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    )

    return {accessToken, refreshToken};
};

const storeRefreshToken = async(userId, refreshToken) => {
    await redis.set(`refresh_token:${userId}`, refreshToken, "EX", 15*24*60*60);
};

const setCookies = (res, accessToken, refreshToken) => {
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 30 * 60 * 1000
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 15 * 24 * 60 * 60 * 1000
    });
}

export const register = async (req, res) => {
    const {fullName, email, password, role} = req.body;

    try {
        if([fullName, email, password, role].some((field) => field.trim() === "")){
            return res.status(400).json({message: "Please fill in all fields."});
        }
    
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(401).json({message: "User Already exists use any other email."})
        }
    
        const user = await User.create(
            {
                fullName,
                email,
                password,
                role
            }
        )
    
        if(!user){
            return res.status(201).json({message: "error while creating an user", user})
        }

        //authentication
        const {accessToken, refreshToken} = generateTokens(user._id);        
        await storeRefreshToken(user._id, refreshToken);

        setCookies(res, accessToken, refreshToken);
    
        res.status(201).json({user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
            accessToken,
            refreshToken
        },message: `user created successfully.`});
    } catch (error) {
        res.status(500).json({Error: "Error in signup controller."})
    }
}

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        
        if([email, password].some((field) => field.trim() === "")){
            return res.status(400).json({error: "Please fill in all fields."});
        }
        
        const user = await User.findOne({ email });
        if(!user){
            return res.status(404).json({message: "Email is invalid."})
        }
        
        const isPasswordCorrect = await user.isPasswordCorrect(password);
        if(!isPasswordCorrect){
            return res.status(403).json({message: "Password is incorrect."})
        }
        
        const {accessToken, refreshToken} = generateTokens(user._id)
        
        setCookies(res, accessToken, refreshToken);
        await storeRefreshToken(user._id, refreshToken);
    
        res.status(201).json({
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
        });

    } catch (error) {
        res.status(500).json({Error: "Error in login controller."});
    }
}

export const logout = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(refreshToken){
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            await redis.del(`refresh_token:${decoded.userId}`);
        }

        res.clearCookie("accessToken"); 
        res.clearCookie("refreshToken");

        res.status(200).json({message: "Logged Out successfully."})
    } catch (error) {
        res.status(500).json({Error: "Error in logout controller."});
    }
}

export const refresh_accessToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
    
        if(!refreshToken){
            return res.status(401).json({message: "Unauthorized"});
        }
    
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const storedToken = await redis.get(`refresh_token:${decoded.userId}`);
    
        if(refreshToken !== storedToken){
            return res.status(401).json({message: "Invalid refresh token."})
        }
    
        const accessToken = jwt.sign({userId: decoded.userId}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: process.env.ACCESS_TOKEN_EXPIRY});
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 30 * 60 * 1000
        })
    
        res.status(201).json({message: "Access Token refreshed Successfully."});
    } catch (error) {
        res.status(500).json({Error: "Error in refreshingToken controller."});
    }
}