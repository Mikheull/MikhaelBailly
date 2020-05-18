const router = require('express').Router();

const resolve = require('path').resolve

router.use('/', require('./index'))
router.use('/github', require('./github'))
router.use('/projets', require('./project'))
router.get('/job', function (req, res) { res.sendFile(resolve('./public/uploads/CV.pdf')) })

router.get('/sitemap.xml', function (req, res) { res.set('Content-Type', 'text/xml'); res.render('sitemap') })
router.get('/sitemap', function (req, res) { res.set('Content-Type', 'text/xml'); res.render('sitemap') })

router.use(function (req, res) {
  res.status(404).render('index', {
    viewPath: '404/index.ejs',
    currentPage: '404',
    BASE_URL: process.env.BASE_URL
  })
})
  
module.exports = router
