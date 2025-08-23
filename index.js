const express = require("express")
const {makeDbConnection} = require("./dbConnection")
const ItemInfo = require("./petStore.model")

const app = express()
app.use(express.json())

makeDbConnection()


app.get("/products", async (req, res) => {
    try{
        const allProducts = await ItemInfo.find()
        res.status(200).json(allProducts)
    }catch(error){
        res.status(500).json({message : error.message})
    }    
})

app.get("/products/:productId" , async (req, res) => {
    try{
        const id = req.params.productId
        const selectedProduct = await ItemInfo.findById(id)
        res.status(200).json(selectedProduct)
    }catch(error){
        res.status(500).json({message : error.message})
    }
})

app.get("/categories", async (req, res) => {
    try{
        const allCategories = (await (ItemInfo.find())).map(prod => prod.category)
        const finalCategories = [...new Set(allCategories)]
        res.status(200).json(finalCategories)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

const PORT = 3000

app.listen(PORT, () => {
    console.log("server is running on port", PORT)
})