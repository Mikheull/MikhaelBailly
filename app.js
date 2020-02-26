const express = require("express");
const app = express();
const server = require('http').createServer(app);
const session = require('express-session');
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

// Config
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: "E€$=vD6€HxP6vg&A33h2LZ96!;3Q4tm>mRµ",
    saveUninitialized: true,
    resave: true
}))


// Router
const router = require('./routes/routes');
app.use('/', router);


server.listen(3030, () => {
    console.log(`Listening to requests on http://localhost:3030`);
});