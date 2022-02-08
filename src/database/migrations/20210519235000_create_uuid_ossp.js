const {Knex} = require('knex')

/**
 * Up is responsible to migrations
 * @param {Knex} knex 
 * @returns {Knex.Raw}
 */
exports.up = function(knex) {
    return knex.raw('create extension if not exists "uuid-ossp"')
};

/**
 * Up is responsible to migrations
 * @param {Knex} knex 
 * @returns {Knex.Raw}
 */
exports.down = function(knex) {
    return knex.raw('drop extension if exists "uuid-ossp"')
};
