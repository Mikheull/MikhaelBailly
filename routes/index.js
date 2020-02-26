let express = require('express');
let router = express.Router();
const nodemailer = require('nodemailer');


router.get('/', async function(req, res, next) {
	res.render('index', {
		viewPath: 'home/index.ejs',
		currentPage: 'home',
		baseUri: process.env.baseUri
	});
});

router.post('/', async function(req, res, next) {
	let transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
           user: 'b8b14cf92982e6',
           pass: '3ff8403eeb2e13'
        }
    });

    const message = `Mail: ${req.body.email}<br> Nom: ${req.body.full_name}<br><br> Message: ${req.body.message}`;
    const email = {
        from: 'mikhae.bailly@gmail.com',
        to: 'mikhae.bailly@gmail.com',
        subject: 'Contact [mikhaelbailly.fr]',
        html: message
    };
    transport.sendMail(email, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
    });
    

	res.redirect('/');
});



module.exports = router;