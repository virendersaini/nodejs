var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('front/index', { title: 'FRONT',layout: 'front/layout/layout' });
});

module.exports = router;
