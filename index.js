import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRouter from './Routers/productRouter.js'

//dotenv config
dotenv.config();

//Initialize 
const app = express();

//cors middleware
app.use(cors());

//Default middleware for req.body
app.use(express.json());

//Defaul route for cannot get
app.get('/',(req,res)=>{
    res.status(200).send("Welcome to Our Api")
})

//Custom Routes From Routers
app.use('/api/product',productRouter)


//port declare
const port = process.env.PORT || 5000

//Start The Server
app.listen(port,()=>{
    console.log("started the server and runnig on the port")
})