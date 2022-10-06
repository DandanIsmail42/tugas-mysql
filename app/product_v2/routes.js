const router = require('express').Router();
const controlerV2 = require('./controller');

router.get('/product', controlerV2.index);
router.get('/product/:id', controlerV2.view);
router.post('/product', controlerV2.store);
router.put('/product/:id', controlerV2.update);
router.delete('/product/:id', controlerV2.deleteProduct);



module.exports = router;