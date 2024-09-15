import Coupon from "../models/coupon.model.js"

export const getCoupon = async (req, res) => {
    try {
        const coupon = await Coupon.findOne({userId: req.user._id, isActive: true});
        res.json(coupon || null);
    } catch (error) {
        console.log("Error at getCoupon controller", error.message);
        res.status(500).json({message: "Server Error", error: error.message});        
    }
}

export const validateCoupon = async (req, res) => {
    try {
        const {code} = res.body;
        const coupon = await Coupon.findOne({ code: code, userId: req.user._id, isActive: true});

        if(!coupon){
            return res.status(404).json({message: "Coupon not found!"});
        }

        if(coupon.expiry < new Date()){
            coupon.isActive = false;
            await coupon.save();
            return res.status(404).json({message: "Coupon expired!"});
        }

        res.json({
            message: "coupon is valid",
            code: coupon.code,
            discount: coupon.discount
        })
    } catch (error) {
        console.log("Error in validate coupon controller", error.message);
        res.status(501).json({message: "Server Error!", error: error.message});        
    }
}