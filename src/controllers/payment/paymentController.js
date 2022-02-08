const { Request, Response } = require('express')
const { PaymentService } = require('../../services')
const { v4: uuidv4 } = require('uuid');

class PaymentController {
    /** @type {PaymentService} */
    #service

    /**
     * @param {PaymentService} service 
     */
    constructor(service) {
        this.#service = service
    }

    /**
     * @param {Request} request 
     * @param {Response} response 
     */

    insertPayment = async (request, response) => {
        try {

            let payment = request.body;

            payment.internalId = uuidv4().toString();
            payment.internalId.replace(/-/gi, '');
    
            if(payment.externalId == undefined)
            return response.status(500).json({message: 'externalID inexistente'})
            
            if(payment.externalId.length <= 5)
            return response.status(500).json({message: 'externalID muito curto'})


            let expectedDate = payment.expectedOn.split("-");
            payment.expectedOn = `${expectedDate[2]}-${expectedDate[1]}-${expectedDate[0]}`;
    
            payment.amount = payment.amount.toFixed(2);   

            let date = new Date(payment.expectedOn);
            let currentDate = new Date();

            if(date <= currentDate){
                payment.status = "REJECTED"
            } 

            const res = await this.#service.insertPayment({payment: request.body})

            return response.status(200).json(res)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    returnPayment = async (request, response) => {
        try {

            const res = await this.#service.returnPayment({id: request.params.id})
            
            if(res.length == 0)
            return response.status(404).json({message: 'Não encontrado!'})

            if(res[0].status == "REJECTED")
            return response.status(401).json(res)

            return response.status(200).json(res)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

}

module.exports = PaymentController