import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    services: [
        {
            services: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Service",
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: {
                type: Number,
                required: true,
                min: 0
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    stripeSessionId: {
        type: String,
        unique: true
    },
}, {timeseries: true});

const Order = mongoose.model("Order", orderSchema);

export default Order;