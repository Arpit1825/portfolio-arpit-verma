require("dotenv").config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const contactRoute = require("./routes/contact");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb sucessfully connected");
    
}).catch((err)=>{
console.log("Error detected :",err);
})

app.use('/api/contact',contactRoute);

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});


app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});