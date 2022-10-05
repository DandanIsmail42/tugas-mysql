const express = require('express');
const port = process.env.PORT || 8000
const app = express();
const productRouter = require('./app/product/routes');
const logger = require('morgan');


app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/v1', productRouter);

app.listen(port, () => console.log(`Server is running ${port}`));
