exports.up = knex => knex.schema.createTable("orders_dishes", table => {
  table.increments("id");
  table.integer("quantity").notNullable();
 

  table.integer("order_id").references("id").inTable("orders").notNullable();
  table.integer("dish_id").references("id").inTable("dishes").notNullable().onDelete("CASCADE");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());

});

// down - deleta a tabela
exports.down = knex => knex.schema.dropTable("orders_dishes");



