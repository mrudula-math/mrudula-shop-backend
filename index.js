const express = require('express');
const cors = require('cors')
const app = express();
const morgan = require('morgan');
const nodemon = require('nodemon')
const sql = require('mysql')


//bring in routes
const productRoutes = require('./route/products')

//middleware

app.use(cors())

app.use(morgan("dev"));

app.use("/",productRoutes)

const port = 3000
app.listen(port,()=> {
    console.log('Server running on port 3000')
}
);