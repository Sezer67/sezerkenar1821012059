var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/*GET home page. //require -> import etme*/
router.get('/',ctrlMain.index);

module.exports = router;
