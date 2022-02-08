const { Knex } = require('knex')
const faker = require('faker')
const { v4: uuidv4 } = require('uuid')

/**
 * 
 * @param {Knex} knex 
 * @returns {Knex.QueryBuilder}
 */
exports.seed = async function (knex) {
  //await knex('users').del();
  return await knex('users').insert([
    {
      id: uuidv4(),
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      category: faker.random.arrayElement(['consumer', 'artist', 'galery'])
    },{
      id: uuidv4(),
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      category: faker.random.arrayElement(['consumer', 'artist', 'galery'])
    },
    {
      id: uuidv4(),
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      category: faker.random.arrayElement(['consumer', 'artist', 'galery'])
    },
    {
      id: uuidv4(),
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      category: faker.random.arrayElement(['consumer', 'artist', 'galery'])
    },
  ]);
};
