const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const router = require("../router/product.router");

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Esto es App de postres");
});

app.use(express.json());
app.use('/api/v1', router);


module.exports = app;