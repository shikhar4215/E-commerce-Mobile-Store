var express = require('express');
var router = express.Router();
const ctrllist=require('../controllers/list');
const ctrlabout=require('../controllers/about');
const ctrlindex=require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/display', function(req, res, next) {
  res.render('display', { title: 'Express' });
});
router.get('/index',ctrlindex.index);
// router.get('/about', function(req, res, next) {
//   res.render('about', { title: 'About' });
// });
router.get('/about',ctrlabout.about);
router.get('/list-display',ctrllist.list);
router.get('/list/:listid',ctrllist.productinfo);

router.route('/new')
  .get(ctrllist.addNewProduct)
  .post(ctrllist.doAddNewProduct);
module.exports=router;
