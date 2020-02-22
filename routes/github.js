let express = require('express');
let router = express.Router();


/* GET github home page. */
router.get('/', async function(req, res, next) {
	res.send('github home');
});


/* GET github reference page. */
router.get('/:query', async function (req, res) {
	res.send(req.params.query);
})

module.exports = router;