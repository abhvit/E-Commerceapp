import dotenv from 'dotenv';

dotenv.config();

import express from 'express';

import productRouter from './Routes/product.route.js';
import connectTodb from './config.js';

// instantiate express application

const app=express();

//middleware to parse json data

app.use(express.json());

//application routes

app.use('/products', productRouter);

//listen to app server

app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
    connectTodb();
})

