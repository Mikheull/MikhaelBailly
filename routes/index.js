let express = require('express');
let router = express.Router();

router.get('/', async function(req, res, next) {
	res.render('index', {
		viewPath: 'home/index.ejs',
        currentPage: 'home',
		baseUri: process.env.baseUri
	});
});


module.exports = router;