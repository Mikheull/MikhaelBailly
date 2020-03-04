let express = require('express');
let router = express.Router();
const fs = require("fs");

/* GET project home page. */
router.get('/', async function(req, res, next) {
	let rawdata = fs.readFileSync('data/projects.json');
	
	res.render('index', {
		viewPath: 'project/list.ejs',
		currentPage: 'project',
        meta: 'project',
		projectsData: JSON.parse(rawdata),
		baseUri: process.env.baseUri
	});
});

/* GET project reference page. */
router.get('/:query', async function (req, res) {
	let ref = req.params.query;
	let rawdata = fs.readFileSync('data/projects.json');
	let list = JSON.parse(rawdata);

	let code, prev, next;
	for (let key in list) {
		if(list[key].link == ref){
			prev = key - 1;
			code = key;
			next = key + 1;
		}
	}
	
	if(code === undefined || code === null){
		res.render('index', {
			viewPath: 'project/article_not_found.ejs',
			currentPage: 'project',
			meta: 'project',
			baseUri: process.env.baseUri
		});
	}else{
		let rawdata_p = fs.readFileSync('data/projects/'+code+'.json');
		let projectData = JSON.parse(rawdata_p);

		let prevData = list[ list[code].prev ];
		let nextData = list[ list[code].next ];
		
		res.render('index', {
			viewPath: 'project/article.ejs',
			currentPage: 'project',
			meta: 'project-details',
			projectData: projectData,
			prevData: prevData,
			nextData: nextData,
			ref: code,
			baseUri: process.env.baseUri
		});
	}
})

module.exports = router;