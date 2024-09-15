import Service from "../models/service.model.js";

export const addToCart = async (req, res) => {
    try {
        const {serviceId} = res.body;
        const user = req.user;

        const serviceAlreadyExists = user.cartItems.find(item => item.id === serviceId);

        if(serviceAlreadyExists){
            serviceAlreadyExists.quantity += 1;
        }
        else{
            user.cartItems.push(serviceId);
        }

        await user.save();
        res.json(user.cartItems);
    } catch (error) {
        console.log('Error in removeAllItems controller', error.message);
        res.status(500).json({message: "Server Error"});
    }
}

export const removeAllItems = async (req, res) => {
    try {
        const {serviceId} = res.body;
        const user = req.user;
    
        if(!serviceId){
            user.cartItems = [];
        }
        else{
            user.cartItems = user.cartItems.filter(item => item.id !== serviceId);
        }
    
        await user.save();
    
        res.json(user.cartItems);
    } catch (error) {
        console.log('Error in removeAllItems controller', error.message);
        res.status(500).json({message: "Server Error"});        
    }
}

export const updateQuantity = async (req, res) => {
    try {
        const {id: serviceId} = req.params;
        const {quantity} = res.body;
        const user = req.user;
        const existingItem = user.cartItems.find((item) => item.id === serviceId);

        if(existingItem){
            if(quantity === 0){
                user.cartItems = user.cartItems.filter((item) => item.id !== serviceId);
                await user.save;
                res.json(user.cartItems);
            }

            existingItem.quantity = quantity;
            await user.save();
            res.json(user.cartItems);
        }
        else{
            res.status(404).json({message: "Service not found"});
        }
    } catch (error) {
        console.log('Error in update quantity controller', error.message);
        res.status(501).json({message: "Server Error!"});
    }
}

export const getCartServices = async (req, res) => {
    try {
        const services = await Service.find({_id: {$in: req.user.cartItems}});
        const cartItems = services.map((service) => {
            const item = req.user.cartItems.find((cartItem) => cartItem.id === service.id);
            return {...service.toJSON(), quantity: item.quantity};
        })

        res.json(cartItems);
    } catch (error) {
        console.log("Error at getCartServices controller", error.message);
        res.status(501).json({message: "Server Error!"});        
    }
}