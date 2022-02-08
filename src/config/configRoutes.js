const { Express } = require('express')

/**
 * 
 * @param {Express} app 
 */


function configRoutes(app, { startup }) {

    app.post('/paymentOrders', startup.controller.insertPayment);
    app.get('/paymentOrders/:id', startup.controller.returnPayment);
}

module.exports = configRoutes