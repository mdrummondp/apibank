const artRouter = require('express').Router();
const artData = require('../server/data/arts-data');
const _ = require('lodash');

const arts = artData;
const id = 12;

const updateId = function (req, res, next) {
    console.log(req.body);
    if (!req.body.id) {
        id++;
        req.body.id = id + '';
    }
    next();
};

artRouter.param('id', function (req, res, next, id) {
    const event = _.find(arts, {id: id});
    if (event) {
        req.event = event;
        next();
    } else {
        res.json({"error": "Id not found"});
    }
});

artRouter.get('/', function (req, res) {
    res.status(201).json(arts || {});
});

artRouter.get('/forSaleArts', function (req, res) {
    arts.filter(e =>{
        
    })
});

artRouter.get('/:id', function (req, res) {
    const event = req.event;
    res.json(event || {});
});

artRouter.get('/:id/buy', function (req, res) {
    const event = req.event;
    res.json(event || {});
});

artRouter.post('/', updateId, function (req, res) {
    const event = req.body;

    arts.push(event);
    res.status(201).json(event || {});
});

artRouter.put('/:id', function (req, res) {
    const update = req.body;

    if (update.id) {
        delete update.id;
    }

    const event = _.findIndex(arts, {id: req.params.id});

    if (!arts[event]) {
        res.send();
    } else {
        const updatedEvent = _.assign(arts[event], update);
        res.json(updatedEvent);
    }
});

artRouter.delete('/:id', function (req, res) {
    const event = _.findIndex(arts, {id: req.params.id});
    arts.splice(event, 1);

    res.json(req.event);
});

// Error handler
artRouter.use(function (err, req, res, next) {

    if (err) {
        res.status(500).send(err);
    }

});

module.exports = artRouter;