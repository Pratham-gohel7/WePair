import cloudinary from "../lib/clodinary.js";
import { redis } from "../lib/redis.js";
import Service from "../models/service.model.js";

export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find({});
        res.status(200).json({services});
    } catch (error) {
        console.log(`Error at getAllServices contoller.`);
        res.status(500).json({error: `error at getAllServices ${error.message}`});
    }
}

export const getFeaturedServices = async (req, res) => {
    try {
        let featuredServices = await redis.get("featuredServices");
        if(featuredServices){
            return res.json(JSON.parse(featuredServices));
        }

        // if featuredServices not found in redis then we will fetch it from database
        // lean method is just used to get plain javascript object instead of mongoose documents
        // and it helps to increase speed or performance
        featuredServices = await Service.find({isFeatured: true}).lean();

        if(!featuredServices){
            return res.status(404).json({message: "Featured Services not found."});
        }

        await redis.set("featuredServices", JSON.stringify(featuredServices));
        res.json(featuredServices);
    } catch (error) {
        console.log(`error at featured Service controller ${error.message}`);
        res.status(500).json({message: "Error in featured controller", error : error.message});        
    }
}

export const createService = async (req, res) => {
    try {
        const {name, description, price, image, category} = req.body;
        let cloudinaryResponse = null;
    
        if(image){
            cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "service" });
        }
    
        const service = await Service.create({
            name,
            description,
            price,
            img: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
            category
        });
        res.status(201).json({service});
    } catch (error) {
        console.log("Error at createService controller", error);
        res.status(500).json({message: "server Error", error: error.message});
    }
}

export const deleteService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if(!service){
            return res.status(404).json({message: "Service Not Found."})
        }

        if(service.img){
            const publicId = service.image.split("/").pop().split(".")[0];
            try {
                await cloudinary.uploader.destroy(`services/${publicId}`);
                console.log("Successfully deleted image from clodinary");
            } catch (error) {
                console.log("Error while deleting image from clodinary", error);
            }
        }
        await Service.findByIdAndDelete(req.params.id);
        res.json({message: "Service deleted successfully."})
    } catch (error) {
        console.log("Error at deleteService controller", error);
        res.status(500).json({message: "server Error", error: error.message});        
    }
}

export const getRecommendedServices = async (req, res) => {
    try {
        const service = await Service.aggregate([
            {$sample: {size: 3}},
            {
                $project: {
                    _id: 1,
                    name: 1,
                    description: 1,
                    price: 1,
                    img: 1
                }
            }
        ])
        res.json(service);
    } catch (error) {
        console.log("Error at getRecommendedServices controller", error);
        res.status(500).json({message: "Server Error", error: error.message});        
    }
}

export const getServicesByCategory = async (req, res) => {
    const category = req.params;
    try {
        const services = await Service.find({category});
        res.json(services);
    } catch (error) {
        console.log("Error at getServicesByCategory controller", error);
        res.status(500).json({message: "Server Error", error: error.message});        
    }
}

export const toggleFeaturedService = async (req, res) => {
    try {
        const id = req.params.id;
        const service = await Service.findById(id);
        if (service) {
            service.isFeatured = !service.isFeatured;
            const updatedServices = await service.save();

            await updateFeaturedServicesCachename();
            res.json(updatedServices);
        }
    } catch (error) {
        console.log("Error at toggleFeaturedService controller", error);
        res.status(500).json({message: "Server Error", error: error.message});        
    }
}

async function updateFeaturedServicesCachename() {
    try {
        const featuredServices = await Service.find({isFeatured: true}).lean();
        await redis.set("featured_Services", JSON.stringify(featuredServices));
    } catch (error) {
        console.log("Error in update cache");
        
    }
}