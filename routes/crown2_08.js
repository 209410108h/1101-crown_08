var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown2_08', { title: 'crown2_08', name: 'Hung-Wei,Liu', id: '209410108' });
});

module.exports = router;
