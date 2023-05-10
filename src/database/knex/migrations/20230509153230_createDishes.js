// up cria a tabela
/* table.integer("user_id").references("id").inTable("users"); - 
faz referência ao id que existe dentro da tabela do usuário
não dá para criar uma nota se não existir um usuário
*/ 
exports.up = knex => knex.schema.createTable("dishes", table => {
  table.increments("id");
  table.text("name").notNullable();
  table.text("description");
  table.varchar("image").default(null);
  table.float("price").notNullable();

  table.integer("category_id").references("id").inTable("categories").notNullable();

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
});

// down - deleta a tabela
exports.down = knex => knex.schema.dropTable("dishes");



