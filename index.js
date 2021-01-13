const express = require("express");
const bodyParser = require("body-parser")
const AllReceipesData = require("./RecipesData");
const { title } = require("process");

const app = express();

app
.use(bodyParser.json())
.get("/", (req,res) =>{
    const data = AllReceipesData
})
.listen(process.env.PORT || 8000)