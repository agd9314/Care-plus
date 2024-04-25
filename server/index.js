import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './connection/connection.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


app.get('/' , (req,res)=> {
    res.send('Hello World');
})

console.log(process.env.PORT);

connectDB();
app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
