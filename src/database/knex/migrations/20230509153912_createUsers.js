exports.up = knex => knex.schema.createTable("users", table => {
  table.increments("id");
  table.text("name").notNullable();
  table.text("email").notNullable();
  table.text("password").notNullable();
  table.varchar("avatar").default(null);
 
  table.boolean("is_admin").default(false);

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());


});

// down - deleta a tabela
exports.down = knex => knex.schema.dropTable("users");




