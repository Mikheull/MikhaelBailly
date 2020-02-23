const express = require('express');
const router = express.Router();
const resolve = require('path').resolve


router.get('/', async function(req, res, next) {
	res.render('index', {
		viewPath: 'home/index.ejs',
		currentPage: 'home'
	});
});

router.use('/github', require('./github') );
router.use('/projets', require('./project') );
router.get('/job', function(req, res) {res.sendFile( resolve('./public/uploads/CV.pdf') );})

router.use(function(req,res){
    res.status(404).send('404');
});
  
module.exports = router;