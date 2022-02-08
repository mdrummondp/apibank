const {Knex} = require('knex')

/**
 * Up is responsible to migrations
 * @param {Knex} knex 
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.createTable('arts', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))

    table.string('name', 255).notNullable()
    table.string('description')
    table.enum('status', ['forSale', 'sold']).notNullable().defaultTo('forSale');
    table.timestamps(true, true)

    table.uuid('user_id').references('id').inTable('users')
  })
};

/**
 * Up is responsible to migrations
 * @param {Knex} knex 
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('arts')
};
