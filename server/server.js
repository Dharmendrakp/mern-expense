import  express from "express";
import mongoose from 'mongoose';
import cors from "cors";

const PORT = 4000;

const app = express();
app.use(cors);

await mongoose.connect("mongodb+srv://mern-project:Dharm123@cluster0.dpfgrk3.mongodb.net/?retryWrites=true&w=majority");
console.log("MongoDb connection is successful");

app.get('/',(req, res) => {
    res.send("Hello Ram");
});

app.listen(PORT, () => {
    console.log("Server is running at port http://localhost:4000");
});