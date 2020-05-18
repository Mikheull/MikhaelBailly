const router = require('express').Router();

const fs = require('fs')
const github = require('octonode')

const client = github.client(process.env.GITHUB_ACCESS_TOKEN)

/* GET github home page. */
router.get('/', async function (req, res) {
  let filters = []
  const rawbannersdata = fs.readFileSync('data/github.json')

  client.get('/users/mikheull/repos', {}, function (err, status, body, headers) {
    // Filters
    for (let key in body) {
      if (!filters.includes(body[key].language) && body[key].language) {
        filters.push(body[key].language)
      }
    }

    // View
    res.render('index', {
      viewPath: 'github/list.ejs',
      currentPage: 'github',
      meta: 'github',
      banners: JSON.parse(rawbannersdata),
      datas: body, 
      filters: filters,
      BASE_URL: process.env.BASE_URL
    })
  })
})

module.exports = router
