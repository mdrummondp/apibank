const { knex, Knex } = require('knex')


class PaymentRepository {
    /** @type {Knex} */
    #database

    /**
     * @param {Knex} database 
     */
    constructor(database) {
        this.#database = database
    }
    
    async returnPayment(id) {
        return await this.#database
        .select('internalId', 'status', 'expectedOn')
        .from('payment')
        .where('externalId', id.id)
    }

    async insertPayment({payment}){
        try{
        return await this.#database
        ('payment')
        .insert(payment);
        }catch(e){
            console.log(e);
        }
    }
}

module.exports = PaymentRepository