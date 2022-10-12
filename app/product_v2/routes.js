const router = require('express').Router();
const controlerV2 = require('./controller');

router.get('/daftarmahasiswa', controlerV2.index);
router.get('/daftarmahasiswa/:id', controlerV2.view);
router.post('/daftarmahasiswa', controlerV2.store);
router.put('/daftarmahasiswa/:id', controlerV2.update);
router.delete('/daftarmahasiswa/:id', controlerV2.deleteMhs);



module.exports = router;