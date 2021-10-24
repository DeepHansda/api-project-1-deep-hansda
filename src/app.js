const express = require('express');
const app = express();
const connect = require('./db/conn');
const port = process.env.PORT || 3000;
const ProductModel = require('./db/models/model');
const productRouter = require('./routers/router')


app.use(express.json());
app.use(productRouter);



app.listen(port,()=>{
    console.log("listening on port" + port);
})