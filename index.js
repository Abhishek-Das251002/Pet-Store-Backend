const express = require("express")
const {makeDbConnection} = require("./dbConnection")
const ItemInfo = require("./petStore.model")

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


const PORT = 3000

app.listen(PORT, () => {
    console.log("server is running on port", PORT)
})