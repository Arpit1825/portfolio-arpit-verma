require("dotenv").config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const contactRoute = require("./routes/contact");


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb sucessfully connected");
    
}).catch((err)=>{
console.log("Error detected :",err);
})

app.use('/api/contact',contactRoute);

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});