const request = require('supertest')
const app = require('./server')

describe('Testando meu server', () => {
    it('Retornando um Payment', async () => {
        const res = await request(app).get('/paymentOrders')
        expect(res.statusCode).toEqual(200);
    })

    it('Retornando um Payment', async () => {
        const res = await request(app).post('/paymentOrders').send(
            {externalId:"asfdasfas",
            amount:1000.00,
            expectedOn:"20-03-2022"})
            
        expect(res.statusCode).toEqual(200);
    })

})

