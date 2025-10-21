const mongoose = require("mongoose")

const orderCartItems = new mongoose.Schema({
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
    total: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
});


const addressSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
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
        state: {
            type: String,
            required: true,
        },
        pincode: {
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
    items: [orderCartItems],
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