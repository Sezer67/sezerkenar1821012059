var express = require('express');
var router = express.Router();
var ctrlMekanlar = require('../controllers/mekanlar');
var ctrlDigerleri = require('../controllers/digerleri');

router.get('/',ctrlMekanlar.anaSayfa);
router.get('/mekan/:mekanid',ctrlMekanlar.mekanBilgisi);
router.get('/mekan/:mekanid/yorum/yeni',ctrlMekanlar.yorumEkle);
router.get('/hakkinda',ctrlDigerleri.hakkinda);
router.post('/mekan/:mekanid/yorum/yeni',ctrlMekanlar.yorumumuEkle);

/*
router.get('/admin/mekan/yeni',ctrlMekanlar.adminSayfa);
router.get('/admin/mekan/yeni',ctrlMekanlar.mekanEkle);
//mekanı ekle tuşunun çağıracağı metodun rotası
router.post('/admin/mekan/yeni',ctrlMekanlar.mekaniEkle);
//mkean sil
router.get('/admin/mekan/:mekanid/sil',ctrlMekanlar.mekanSil);
//mekanı güncelleme sayfa rota
router.get('/admin/mekan/:mekanid/guncelle',ctrlMekanlar.mekanGuncelle);
//mekan güncelleme butonununçağıracağı metod rota
router.post('/admin/mekan/:mekanid/guncelle',ctrlMekanlar.mekaniGuncelle);
*/
module.exports = router;
