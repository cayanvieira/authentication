exports.up = function (knex) {
    return knex.schema.createTable('user', (table) => {

        table.increments("id");

        table.string('name');

        table.string("birthData");

        table.string("sex");

        table.string("email");

        table.string("password");

        table.string("uf");

        table.boolean("administer");
        
        table.boolean("checked");

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('user')
};