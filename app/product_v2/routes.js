const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const controlerV2 = require('./controlerV2');

router.get('/product', controlerV2.index);
router.get('/product/:id', controlerV2.view);
router.post('/product', upload.single('image'), controlerV2.store);
router.put('/product/:id', upload.single('image'), controlerV2.update);
router.delete('/product/:id', upload.single('image'), controlerV2.deleteProduct);



module.exports = router;