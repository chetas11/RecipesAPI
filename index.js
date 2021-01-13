const express = require("express");
const bodyParser = require("body-parser")
const AllReceipesData = require("./RecipesData");


const app = express();

app
.use(bodyParser.json())
.get("/", (req,res) =>{
    const data = AllReceipesData
    res.send(data)
})
.listen(process.env.PORT || 8000)