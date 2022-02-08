const {Knex} = require('knex')

/**
 * Up is responsible to migrations
 * @param {Knex} knex 
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.alterTable('arts', (table) => {

  
    table.enum('status', ['forSale', 'sold']).notNullable().defaultTo('forSale');

  })
};

/**
 * Up is responsible to migrations
 * @param {Knex} knex 
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
};
