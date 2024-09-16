import Coupon from "../models/coupon.model.js";
import { stripe } from "../lib/stripe.js";
import Order from "../models/order.model.js";
export const createCheckoutSession = async (req, res) => {
    try {
        const {services, couponCode} = req.body;

        if(!Array.isArray(services) || services.length === 0){
            return res.status(400).json({message: "Invalid or empty services"});
        }

        let totalAmount = 0;

        const lineItems = services.map(service => {
            const amount = Math.round(service.price * 100);         //actually stipe wants amount in cents
            totalAmount += amount * service.quantity;

            return {
                price_data: {
                    currency: "usd",
                    service_data: {
                        name: service.name,
                        images: [service.image],
                    },
                    unit_amount: amount,
                }
            }
        });

        let coupon = null;
        if(couponCode){
            coupon = await Coupon.findOne({code: couponCode, userId: req.user._id, isActive: true});

            if(coupon){
                totalAmount = Math.round(totalAmount * coupon.discount / 100);
            }
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/cart`,
            discounts: coupon ? [{
                coupon: await createStripeCoupon(coupon.discount)
            }] : [],
            metadata: {
                userId: req.user._id.toString(),
                coupon: coupon ? coupon.code : "",
                services: JSON.stringify(
                    services.map((service) => ({
                        id: service._id,
                        quantity: service.quantity,
                        price: service.price
                    }))
                ),
            },
        });

        if(totalAmount >= 20000){
            await createNewCoupon(req.user._id);
        }

        res.status(200).jon({id: session.id, totalAmount: totalAmount / 100})

    } catch (error) {
        console.log(`Error in createCheckoutSession controller`, error);
        res.status(501).json({message: "Server Error!", error: error.message});        
    }
}

async function createStripeCoupon(discountPercentage){
    const coupon = await stripe.coupons.create({
        percent_off: discountPercentage,
        duration: "once",
    })

    return coupon.id;
}

async function createNewCoupon(userId){
    const newCoupon = new Coupon({
        code: "GIFT" + Math.random().toString(36).substring(2, 8).toUpperCase(),
        discount: 10,
        expiry: new Date(Date.now() * 30 * 24 * 60 * 60 * 1000),
        userId
    })

    await newCoupon.save();
    return newCoupon;
}

export const checkoutSuccess = async (req, res) => {
    try {
        const {sessionId} = req.body;
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if(session.payment_status === "paid"){
            if(session.metadata.couponCode){
                await Coupon.findOneAndUpdate(
                    {
                        code: session.metadata.couponCode,
                        userId: session.metadata.userId
                    },
                    {
                        isActive: false
                    }
                )
            };
        }

        const services = JSON.parse(session.metadata.services);
        const newOrder = new Order({
            user: session.metadata.userId,
            services: services.map((service) => ({
                service: service.id,
                quantity: service.quantity,
                price: service.price
            })),
            totalAmount: session.amount_total / 100,            //converted cents to dollors
            stripeSessionId: sessionId
        });

        await newOrder.save();

        res.status(200).json({
            success: true,
            message: "Payment successfull, order placed, and coupon deactivated if used.",
            orderId: newOrder._id
        })
    } catch (error) {
        console.log("Error in checkoutSuccess controller", error);
        res.status(501).json({message: "Server Error!", error: error.message});        
    }
}