import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from './routes/Post.js';
import GenerateImageRouter from './routes/GenerateImage.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({extended: true}));

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    });
});

app.use('/api/post', postRoutes);
app.use('/api/generateImage', GenerateImageRouter);

//default get

app.get("/", async(req, res) =>{
    res.status(200).json({
        message: "Hello Developers",
    });
});

//function to connect mongoDB
const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log("MongoDB Connected"))
    .catch((err)=>{
        console.error("Failed to connect to DB");
        console.error(err);
    });
};

//function to start the server
const startServer = async () => {
    try{
        connectDB();
        app.listen(8080, () => console.log("Server started on port 8080"))
    }catch (error){
        console.log(error);
    }
};

startServer(); 