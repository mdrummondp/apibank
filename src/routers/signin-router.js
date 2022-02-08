const signinRouter = require('express').Router();
const _ = require('lodash');


signinRouter.post('/', function (req, res) {
    const event = req.body;

    res.status(201).json(event || {});
});

// Error handler
signinRouter.use(function (err, req, res, next) {
    if (err) {
        res.status(500).send(err);
    }
});

module.exports = signinRouter;