var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: ' Gonzalez Mendoza Raul ', appName: 'WebApp', company: 'Awsome Software' });
});

/* Agregando nuevba ruta*/
router.get('/greeting', function(req, res, next){
  res.status(200).json({message: 'Hola campeon de la fullstack web'})
})

module.exports = router;
