exports.up = knex => knex.schema.createTable("categories", table => {
  table.increments("id");
  table.text("name");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

// down - deleta a tabela
exports.down = knex => knex.schema.dropTable("categories");