var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', autor: 'Gonzalez Mendoza Raul',NameApp: 'WepApp', Company: 'Awsome Software'});
});

/* codigo nuevo. */
router.get('/greeting', function(req, res, next) {
res.send('hola campeon como estas?') 
})

/* codigo profe*/
router.get('/hola', function(req, res, next){
res.status(200).json({message: 'Gonzalez Mendoza Raul Jonoel'})
})

module.exports = router;
