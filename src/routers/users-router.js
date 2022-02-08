const userRoute = require('express').Router();
const usersData = require('../server/data/users-data');
const _ = require('lodash');

const users = usersData;

userRoute.param('id', function (req, res, next, id) {
    const event = _.find(users, {id: id});
    if (event) {
        req.event = event;
        next();
    } else {
        res.json({"error": "Id not found"});
    }
});

//get all users data
userRoute.get('/', function (req, res) {
    res.status(201).json(users || {});
});

userRoute.get('/:id/account', function (req, res) {
    const event = req.event;
    res.json(event || {});
});

userRoute.get('/:id/arts', function (req, res) {
    const event = req.event;
    res.json(event || {});
});

userRoute.post('/:id/connect_wallet', function (req, res) {
    const event = req.body;
    res.status(201).json(event || {});
});

//receives current_password, new_password, new_password_confirmation
userRoute.put('/:id/change_password', function (req, res) {
    const update = req.body;

    if (update.id) {
        delete update.id;
    }

    const event = _.findIndex(users, {id: req.params.id});

    if (!users[event]) {
        res.send();
    } else {
        const updatedEvent = _.assign(users[event], update);
        res.json(updatedEvent);
    }
});

userRoute.put('/:id', function (req, res) {
    const update = req.body;

    if (update.id) {
        delete update.id;
    }

    const event = _.findIndex(users, {id: req.params.id});

    if (!users[event]) {
        res.send();
    } else {
        const updatedEvent = _.assign(users[event], update);
        res.json(updatedEvent);
    }
});

userRoute.delete('/:id', function (req, res) {
    const event = _.findIndex(users, {id: req.params.id});
    users.splice(event, 1);

    res.json(req.event);
});

// Error handler
userRoute.use(function (err, req, res, next) {

    if (err) {
        res.status(500).send(err);
    }

});

module.exports = userRoute;