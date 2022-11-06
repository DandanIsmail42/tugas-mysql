const express = require('express');
const port = process.env.PORT || 8000
const app = express();
const productRouter = require('./app/product/routes');
const productRouterV2 = require('./app/product_v2/routes');
const logger = require('morgan');


app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use('/api/v1', productRouter);
app.use('/api/v2', productRouterV2);

app.listen(port, () => console.log(`Server is running ${port}`));
