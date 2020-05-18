const router = require('express').Router();

router.get('/', async function (req, res, next) {
  res.render('index', {
    viewPath: 'home/index.ejs',
    currentPage: 'home',
    BASE_URL: process.env.BASE_URL
  })
})

module.exports = router
