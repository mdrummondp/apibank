const express = require('express');
const morgan = require('morgan');

const { configRoutes } = require('../config')
const injector = require('../injection')

const app = express();

app.use(morgan('dev'));

// Enable CORS on ExpressJS to avoid cross-origin errors when calling this server using AJAX
// We are authorizing all domains to be able to manage information via AJAX (this is just for development)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,recording-session");
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

configRoutes(app, injector)

module.exports = app;