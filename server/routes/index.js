var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Gonzaleez Raul', NameApp: 'WepApp', Company: 'Awsome Sofware' });
});

router.get('/greeting', function(req, res, next ){
res.send('Hola Campeon')
})


router.get('/hola', function(req, res, next ){
 res.status(200).json({message: 'Gonzalez Mendoza Raul Jonoel'})
  })




module.exports = router;
