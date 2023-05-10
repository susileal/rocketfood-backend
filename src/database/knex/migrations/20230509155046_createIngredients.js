exports.up = knex => knex.schema.createTable("ingredients", table => {
  table.increments("id");
  table.text("name").notNullable();
 
  table.integer("dish_id").references("id").inTable("dishes").notNullable().onDelete("CASCADE");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());

});

// down - deleta a tabela
exports.down = knex => knex.schema.dropTable("ingredients");

