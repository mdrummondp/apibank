const { database } = require('../config')
const { PaymentRepository } = require('../repositories')
const { PaymentService } = require('../services')
const { PaymentController } = require('../controllers')

const repository = new PaymentRepository(database)
const service = new PaymentService(repository)
const controller = new PaymentController(service)

module.exports = {
    repository, 
    service, 
    controller
}