const express = require("express");
const path = require("path");
const connectToDb = require("./config/db.js");
const User = require("./models/user.model.js")

const app = express();
const PORT = 3000;

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));


app.get("/",(req,res) => {
    res.render("index");
})

app.get("/user",async (req,res) => {
    const users = await User.find();
    res.render("read",{users});
})

app.post("/create",async (req,res) => {
    const {name,email,image} = req.body;
    if(!name || !email || !image){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
    }
    const user = await User.create({name,email,image});
    if(!user){
        return res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }
    res.redirect("/user");
})

app.get("/edit/:id",async (req,res) => {
    const {id} = req.params;
    const user = await User.findById({_id:id});
    res.render("edit",{user});
})

app.post("/update/:id",async (req,res) => {
    const {id} = req.params;
    const {name,email,image} = req.body;
    const user = await User.findByIdAndUpdate({_id:id},{name,email,image});
    res.redirect("/user");
})

app.post("/update/:id",async (req,res) => {
    const {id} = req.params;
    const user = await User.findByIdAndUpdate({_id:id},{req,body});
    res.redirect("/user");

})

app.get("/delete/:id",async(req,res) => {
    const {id} = req.params;
    console.log(id);
    const user = await User.findByIdAndDelete({_id:id});
    res.redirect("/user");
})



app.listen(PORT,async() => {
    await connectToDb();
    console.log(`server successfully running on http://localhost:${PORT}`);
})