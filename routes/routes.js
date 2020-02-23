const express = require('express');
const router = express.Router();


router.get('/', async function(req, res, next) {
	res.render('index', {
		viewPath: 'home/index.ejs',
		currentPage: 'home'
	});
});

router.use('/github', require('./github') );
router.use('/projets', require('./project') );

router.use(function(req,res){
    res.status(404).send('404');
});
  
module.exports = router;