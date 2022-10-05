const router = require('express').Router();


const productControler = require('./controler');
const path = require('path');
const fs = require('fs');



router.get('/product', productControler.index);
router.get('/product/:id', productControler.view);
router.post('/product/',  productControler.store);
router.put('/product/:id',  productControler.update);
router.delete('/product/:id',  productControler.destroy);


router.get('/:category/:tag', (req, res) => {
    const { category, tag} = req.params;
    res.json({
        category, tag
    });
});

// router.post('/prod/', upload.single('image'), (req, res) => {
//     const {name, price, stock, status} = req.body;
//     const image = req.file;
//     if(image) {
//         const target = path.join(__dirname, '../../uploads', image.originalname);
//         fs.renameSync(image.path, target);
//         res.json({
//             name,
//             price,
//             stock,
//             status,
//             image
//         })
//         res.sendFile(target);
//     }
// });
  
module.exports = router;



// router.post('/prod/', upload.single('image'), (req, res) => {
    //     const {name, price, stock, status} = req.body;
    //     console.log(req.file);
    //      res.json({
    //         name,
    //         price,
    //         stock,
    //         status,
    //         image,
    //         author
    //      });
        
    // });