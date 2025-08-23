const mongoose = require("mongoose")

const petStoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    petType: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
})

const ItemInfo = mongoose.model("ItemInfo", petStoreSchema)

module.exports = ItemInfo;