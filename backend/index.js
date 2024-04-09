const express = require("express");
const cors= require("cors");
const app= express();
//const router= express.Router();

app.use(cors());
app.use(express.json());//to parse the json object

const mainRouter= require("./routes/index")

//app.use("/api/v1", mainRouter)



app.listen(3000, ()=>{console.log("3000")});



