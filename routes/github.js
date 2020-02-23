let express = require('express');
let router = express.Router();
const github = require('octonode');

let client = github.client({
	id: process.env.GITHUB_ID,
	secret: process.env.GITHUB_SECRET
});
  



/* GET github home page. */
router.get('/', async function(req, res, next) {
	let filters = [];
	
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
			datas: body, 
			filters: filters,
			baseUri: process.env.baseUri
		});
	})
	
});


/* GET github reference page. */
router.get('/:query', async function (req, res) {
	let ref = req.params.query;

	client.get('/repos/mikheull/'+ref, {}, function (err, status, body, headers) {
		
		//Vue
		if(status){
			res.render('index', {
				viewPath: 'github/article.ejs',
				currentPage: 'github',
				projectData: body,
				ref: ref,
				baseUri: process.env.baseUri
			});
		}else{
			res.render('index', {
				viewPath: 'github/article_not_found.ejs',
				currentPage: 'github',
				baseUri: process.env.baseUri
			});
		}
	})

})

module.exports = router;