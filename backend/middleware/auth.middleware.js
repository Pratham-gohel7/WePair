import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const accessToken = await req.cookies.accessToken;
        if (!accessToken) {
            return res.status(401).json({message: "Unauthorized user - Access Token not found"});
        }
    
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decoded.userId).select("-password");
    
        if(!user){
            res.status(401).json({message: "User not found"});
        }
    
        req.user = user;
        next();
    } catch (error) {
        console.log("Error at protectRoute middleware", error);
        res.atstus(501).json({error : "error at protect middleware."})
    }

}

export const adminRoute = (req, res, next) => {
    if(req.user && req.user.role === "admin"){
        next();
    }
    else{
        res.status(403).json({message : "Access denied - Only admin can access this route"});
    }
}