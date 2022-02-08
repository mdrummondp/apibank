const { paymentRepository } = require('../../repositories')

class PaymentService {
    /** @type {paymentRepository} */
    #repository

    /**
     * @param {paymentRepository} repository 
     */
    constructor(repository) {
        this.#repository = repository
    }

    async insertPayment({payment}){  

        return await this.#repository.insertPayment({payment})        
    }

    async returnPayment({id}){
        return await this.#repository.returnPayment({id})
    }
}

module.exports = PaymentService