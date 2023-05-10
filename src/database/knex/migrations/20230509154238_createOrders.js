exports.up = knex => knex.schema.createTable("orders", table => {
  table.increments("id");
  table.text("status").notNullable();
  table.text("payment_method").notNullable();
  table.float("total_price").notNullable();

  table.integer("user_id").references("id").inTable("users").notNullable();

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());

});

// down - deleta a tabela
exports.down = knex => knex.schema.dropTable("orders");


