const signupRouter = require('express').Router();
const signupData = require('../server/data/signup-data');
const _ = require('lodash');

const signup = signupData;

signupRouter.post('/', function (req, res) {
    const event = req.body;

    signup.push(event);
    res.status(201).json(event || {});
});

// Error handler
signupRouter.use(function (err, req, res, next) {
    if (err) {
        res.status(500).send(err);
    }
});

module.exports = signupRouter;