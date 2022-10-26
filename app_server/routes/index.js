


var express = require('express');
var router = express.Router();
var ctrMekanlar=require('../controllers/mekanlar');
var ctrDigerleri=require('../controllers/digerleri');

/* GET home page. */
router.get('/',ctrMekanlar.anaSayfa);
router.get('/mekan',ctrMekanlar.mekanBilgisi);
router.get('/mekan/yorum/yeni',ctrMekanlar.yorumEkle);
router.get('/hakkinda',ctrDigerleri.hakkinda);

module.exports = router;