var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('front/index', { title: 'FRONT',layout: 'front/layout/layout' });
});
router.get('/signup', function(req, res) {
  res.render('front/signup', { title: 'FRONT',layout: 'front/layout/layout' });
});
router.post('/signup', function(req, res) {
    console.log(req);
    Model.User.register;
  res.render('front/signup', { title: 'FRONT',layout: 'front/layout/layout' });
});


module.exports = router;
