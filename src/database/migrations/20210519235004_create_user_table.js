const {Knex} = require('knex')

/**
 * Up is responsible to migrations
 * @param {Knex} knex 
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))

    table.string('name', 255).notNullable()
    table.string('email', 255).notNullable().unique()
    table.string('password', 255).notNullable()
    table.enum('category', ['consumer', 'artist', 'galery']).notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

/**
 * Up is responsible to migrations
 * @param {Knex} knex 
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
