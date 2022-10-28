const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

const port =process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("servidor funcionando ${port}" );

});

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/register" , (req, res) =>{
    res.sendFile(__dirname + "/views/register.html");
});

app.get("/login" , (req, res) =>{
    res.sendFile(__dirname + "/views/login.html");
});