
import express ,{Request, Response} from 'express'

import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
{
    console.log("Database Connected to MongoDB");
};

const app = express();

app.use(express.json()); // convert the api request body into json file automatically

app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/api/test", async(req : Request,res: Response ) => {
    res.json({message : "Hello from the backend"});
});

app.listen(7000, ()=>{
    console.log("Server Running on localhos:7000");
})