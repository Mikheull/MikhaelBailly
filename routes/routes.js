const express = require('express');
const router = express.Router();
const resolve = require('path').resolve




router.use('/', require('./index') );
router.use('/github', require('./github') );
router.use('/projets', require('./project') );
router.get('/job', function(req, res) {res.sendFile( resolve('./public/uploads/CV.pdf') );})

router.use(function(req,res){
    res.status(404).render('index', {
		viewPath: '404/index.ejs',
		currentPage: '404',
		baseUri: process.env.baseUri
	});
});
  
module.exports = router;