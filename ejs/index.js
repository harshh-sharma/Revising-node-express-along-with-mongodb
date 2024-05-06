const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.get("/",(req,res) => {
    res.render("index");
})

app.get("/profile/:name",(req,res) => {
    const {name} = req.params;
    res.send(`This is ${name} Profile`);
})

app.get("/author/profile/:username/:id",(req,res) =>{
    const {username,id} = req.params;
    res.send(`Hello from ${username} and id is ${id}`);
})

app.listen(3000,() => {
    console.log(`server is running on http://localhost:3000`);
})