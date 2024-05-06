const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.get("/",(req,res) => {
    res.render("index");
})

app.post("/",(req,res) => {
    const {title,description} = req.body;
    fs.writeFile(`./data/${title}`,description,(err) => {
        if(err) console.log(err);
        else console.log("done");
    });
    res.send({title:description})
})



app.listen(3000,() => {
    console.log(`server successfully running on http://localhost:3000`);
})

