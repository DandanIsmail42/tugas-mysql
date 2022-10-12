const DaftarMhs = require('./model');



const index = async (req, res) => {
    try{
        await DaftarMhs.findAll()
        .then ((result) => {
            if(result.length > 0 ) {
                res.status(200).json({
                    message: ' Semua daftar DaftarMhs',
                    data: result
                })
            } else {
                res.status(200).json({
                    message: ' Get Method DaftarMhs',
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
    let daftarmhs = await DaftarMhs.findOne({where: {id: id}})
    res.status(200).send(daftarmhs)
}

const store = async (req, res) => {
    const {name, nim, alamat} = req.body;
  
    
    try{
        await DaftarMhs.sync();
        const result = await DaftarMhs.create({name, nim, alamat});
        res.send(result);
    }catch(e) {
        res.send(e);
    }
};

const update = async (req, res) => {
    const {name, nim, alamat} = req.body;
   
    let id = req.params.id;
   
    try{
        await DaftarMhs.sync();
        const result = await DaftarMhs.update({name, nim, alamat}, 
        {
            where: {
                id: id
            }
        }
        );
        res.status(200).json({
            message: ' Update Successfully',
            data: result
        })
    }catch(e) {
        res.send(e);
    }
}

const deleteMhs = async (req, res) => {
    let id = req.params.id;
    await DaftarMhs.destroy({where: {id: id}})
    res.status(200).send('Daelete Successfully')
}

module.exports = {
    index, view, store, update, deleteMhs
}