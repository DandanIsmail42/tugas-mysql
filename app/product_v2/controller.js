
const DaftarMahasiswa = require('./model');




const index = async (req, res) => {
    try{
        await DaftarMahasiswa.findAll()
        .then ((result) => {
            if(result.length > 0 ) {
                res.status(200).json({
                    message: ' Get Method DaftarMahasiswa',
                    data: result
                })
            } else {
                res.status(200).json({
                    message: ' Get Method DaftarMahasiswa',
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
    const {name, nim, alamat} = req.body;
  
    
    try{
        await DaftarMahasiswa.sync();
        const result = await DaftarMahasiswa.create({name, nim, alamat});
        res.send(result);
    }catch(e) {
        res.send(e);
    }
};

const update = async (req, res) => {
    const {users_id, name, price, stock, status} = req.body;
   
    let id = req.params.id;
   
    try{
        await Product.sync();
        const result = await Product.update({users_id, name, price, stock, status}, 
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