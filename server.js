require('dotenv').config();
const express = require('express');
const DBConnection = require('./src/config/dbcon');
const app = express();

//db connect
DBConnection();

//Create a json
app.use(express.json());

//Order Router
const OrderRouter=require('./src/router/order.router');
app.use("/api",OrderRouter);

const port =process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is running ${port}`)
})







