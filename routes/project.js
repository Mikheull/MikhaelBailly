let express = require('express');
let router = express.Router();


/* GET project home page. */
router.get('/', async function(req, res, next) {
	res.send('project home');
});


/* GET project reference page. */
router.get('/:query', async function (req, res) {
	res.send(req.params.query);
})

module.exports = router;