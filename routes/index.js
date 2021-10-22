var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: 'Hung-Wei,Liu', id: '209410108' });
});

module.exports = router;
