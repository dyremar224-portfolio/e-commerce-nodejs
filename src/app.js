require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/product', require('./routes/product/index'));

app.use((err, req, res, next) => {
    require("../exceptions/HandleError")(err, req, res);
});

app.listen(port, () => {
    console.log(`the server is running on port ${port}`);
});
