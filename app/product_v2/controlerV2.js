
const Product = require('./model');
const fs = require('fs');
const path = require('path');



const index = async (req, res) => {
    try{
        await Product.findAll()
        .then ((result) => {
            if(result.length > 0 ) {
                res.status(200).json({
                    message: ' Get Method Product',
                    data: result
                })
            } else {
                res.status(200).json({
                    message: ' Get Method Product',
                    data: []
            })
        }
    })
} catch (error) {
    res.status(200).json({
        message: error
})
}
}

const view = async (req, res) => {
    let id = req.params.id;
    let products = await Product.findOne({where: {id: id}})
    res.status(200).send(products)
}

const store = async (req, res) => {
    const {users_id, name, price, stock, status} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
    }
    try{
        await Product.sync();
        const result = await Product.create({users_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`});
        res.send(result);
    }catch(e) {
        res.send(e);
    }
};

const update = async (req, res) => {
    const {users_id, name, price, stock, status} = req.body;
    const image = req.file;
    let id = req.params.id;
    if(image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target);
    }
    try{
        await Product.sync();
        const result = await Product.update({users_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`}, 
        {
            where: {
                id: id
            }
        }
        );
        res.status(200).json({
            message: ' Put Method Product',
            data: result
        })
    }catch(e) {
        res.send(e);
    }
}

const deleteProduct = async (req, res) => {
    let id = req.params.id;
    await Product.destroy({where: {id: id}})
    res.status(200).send('Product is deleted')
}

module.exports = {
    index, view, store, update, deleteProduct
}