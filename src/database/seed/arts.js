const { Knex } = require('knex')
const faker = require('faker')
const { v4: uuidv4 } = require('uuid')

/**
 * 
 * @param {Knex} knex 
 * @returns {Knex.QueryBuilder}
 */
exports.seed = async function(knex) {
  await knex('arts').del();

  const users = await knex.select().from('users')
  const arts = users.map(user => ({
    id: uuidv4(),
    status: faker.random.arrayElement(['forSale', 'sold']),
    name: faker.lorem.words(5),
    user_id: user.id
  }))

  return await knex('arts').insert(arts);
};
