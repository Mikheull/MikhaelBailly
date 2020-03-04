let express = require('express');
let router = express.Router();
const fs = require("fs");
const github = require('octonode');

let client = github.client(process.env.GITHUB_ACCESS_TOKEN);

/* GET github home page. */
router.get('/', async function(req, res, next) {
	let filters = [];
	let rawbannersdata = fs.readFileSync('data/github.json');
	
	client.get('/users/mikheull/repos', {}, function (err, status, body, headers) {
		
		// Filters
		for (let key in body) {
			if(!filters.includes(body[key].language) && body[key].language){
				filters.push(body[key].language);
			}
		}
		
		
		//Vue
		res.render('index', {
			viewPath: 'github/list.ejs',
			currentPage: 'github',
			meta: 'github',
			banners: JSON.parse(rawbannersdata),
			datas: body, 
			filters: filters,
			baseUri: process.env.baseUri
		});
	})
	
});

module.exports = router;