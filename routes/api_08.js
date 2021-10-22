var express = require('express');
var router = express.Router();
const apicrown2controller_08 = require('../controllers/apicrown2controller_08')

/* GET home page. */
router.get('/category_08', apicrown2controller_08.getCategories);

module.exports = router;
