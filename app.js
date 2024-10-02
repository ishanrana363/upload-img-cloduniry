const express = require("express");
const routes = require("./src/routes/api");

const { default: mongoose } = require("mongoose");
require("dotenv").config();

const dbUrl = process.env.MONGO_URI;

const app = express();

app.use(express.urlencoded({ limit: '1000mb'}));
app.use(express.json({limit: '1000mb'}));

app.get("/",(req,res)=>{
    res.send("Server is running!");
})

mongoose.connect(dbUrl).then((res)=>{
    console.log(`-----Database connection established-----`)
}).catch((err)=>{
    console.log("-----DB connection failed-----", err);
});

app.use("/api/v1", routes);





module.exports = app