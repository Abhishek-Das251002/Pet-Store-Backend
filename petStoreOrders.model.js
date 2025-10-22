const mongoose = require("mongoose")

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number, 
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
})


const addressSchema = new mongoose.Schema({
        addName: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        mobNo: {
            type: Number,
            required: true,
        },
        pincode: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        }
    });

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
    },
    items: [cartItemSchema],
    totalAmount:{
        type: Number,
        required: true,
    },
    deliveryAddress: addressSchema,
},
{timestamps: true}
)

const OrderInfo = mongoose.model("OrderInfo", orderSchema)

module.exports = OrderInfo;