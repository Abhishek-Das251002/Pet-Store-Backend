const express = require("express")
const {makeDbConnection} = require("./dbConnection")
const ItemInfo = require("./petStore.model")
const OrderInfo = require("./petStoreOrders.model")


const app = express()
app.use(express.json())

const cors = require("cors")
const corsOptions = {
    origin: "*", 
    credentials: true,
}
app.use(cors(corsOptions))


makeDbConnection()

const allProducts = async () => {
    try{
        const products = await ItemInfo.find()
        return products
    }catch(error){
        console.log(error)
    }
}

app.get("/products", async (req, res) => {
    try{
        const petProducts = await allProducts()
        if(petProducts){
            res.status(200).json(petProducts)
        }else{
            res.status(404).json({error: "products not found."})
        }
    }catch(error){
        res.status(500).json({error: error.message})
    }    
})

app.get("/products/:productId" , async (req, res) => {
    try{
        const id = req.params.productId
        const selectedProduct = await ItemInfo.findById(id)
        res.status(200).json({data: {product:selectedProduct}})
    }catch(error){
        res.status(500).json({message : error.message})
    }
})

app.get("/categories", async (req, res) => {
    try{
        const allCategories = (await (ItemInfo.find())).map(prod => prod.category)
        const finalCategories = [...new Set(allCategories)]
        res.status(200).json({data : {categories: finalCategories}})
    }catch(error){
        res.status(500).json({message: error.message})
    }
})


app.post("/orders/history", async (req, res) => {
    try{
        const newOrder = new OrderInfo(req.body)
        const saveOrder = await newOrder.save()
        res.status(201).json({message: "order saved successfully.", order: saveOrder})
    }catch(error){
        res.status(500).json({error: error.message})
    }
})


app.get("/orders/history", async (req, res) => {
    try{
        const orderList = await OrderInfo.find()
        res.json(orderList)
    }catch(error){
        res.status(500).json({error: "Failed to fetch hotels."})
    }
})


const PORT = 3000

app.listen(PORT, () => {
    console.log("server is running on port", PORT)
})