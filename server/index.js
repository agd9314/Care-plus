import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './connection/connection.js';
import userRoutes from './Routes/UserRoutes.js';
import bodyParser from 'body-parser';
const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/' , (req,res)=> {
    res.send('Hello World');
})
app.use("/api/user", userRoutes);



connectDB();
app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
