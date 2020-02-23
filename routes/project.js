let express = require('express');
let router = express.Router();
const fs = require("fs");

/* GET project home page. */
router.get('/', async function(req, res, next) {
	let rawdata = fs.readFileSync('data/projects.json');
	
	res.render('index', {
		viewPath: 'project/list.ejs',
		currentPage: 'project',
		projectsData: JSON.parse(rawdata)
	});
});

/* GET project reference page. */
router.get('/:query', async function (req, res) {
	let ref = req.params.query;
	let rawdata = fs.readFileSync('data/projects.json');
	let list = JSON.parse(rawdata);

	let code = '';
	for (let key in list) {
		if(list[key].link == ref){
			code = key;
		}
	}
	
	if(code !== ''){
		let rawdata_p = fs.readFileSync('data/'+code+'.json');
		res.render('index', {
			viewPath: 'project/article.ejs',
			currentPage: 'project',
			projectData: JSON.parse(rawdata_p),
			ref: code
		});
	}else{
		res.render('index', {
			viewPath: 'project/article_not_found.ejs',
			currentPage: 'project',
		});
	}
	

})

module.exports = router;