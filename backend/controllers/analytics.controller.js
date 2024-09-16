import Order from "../models/order.model.js";
import Service from "../models/service.model.js";
import { User } from "../models/user.model.js"

export const getAnalyticsData = async () => {
    const totalUsers = await User.countDocuments();
    const totalServices = await Service.countDocuments();

    const salesData = await Order.aggregate([
        {
            $group: {
                _id: null,  // it groups all docs together
                totalSales: {$sum: 1},
                totalAmount: {$sum: "$totalAmount"}
            }
        }
    ])

    const {totalSales, totalAmount} = salesData[0] || {totalSales: 0, totalAmount: 0};
    
    return {
        users: totalUsers,
        services: totalServices,
        sales: totalSales,
        revenue: totalAmount
    }
}

export const getDailySalesData = async(startDate, endDate) => {
    try {
        const dailySalesData = await Order.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: startDate,
                        $lte: endDate
                    },
                },
            },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    sales: { $sum: 1 },
                    revenue: { $sum: "$totalAmount" }
                },
            },
            {
                $sort: { _id: 1 },
            }
        ]);
    
        const dateArray = getDatesInRange(startDate, endDate);
        return dateArray.map(date => {
            const foundData = dailySalesData.find(item => item._id === data);
            
            return {
                date,
                sales: foundData ? foundData.sales : 0,
                revenue: foundData ? foundData.revenue : 0
            }
        })
    } catch (error) {
        throw error;
    }
}

function getDatesInRange(startDate, endDate){
    const dates = [];
    let currentDate = new Date(startDate);
    while(currentDate <= endDate){
        dates.push(currentDate.toISOString().split("T")[0]);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
}