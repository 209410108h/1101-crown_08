var express = require('express');
var router = express.Router();
const crown2controller_08 = require('../controllers/crown2controller_08')

/* GET home page. */
router.get('/', crown2controller_08.getCategories);

module.exports = router;
