const path = require("path")

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db" )
    },

    // filename - qual lugar que o knex vai armazenar as informações

    migrations:{
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations" )
    },

    seeds:{
      directory: path.resolve(__dirname, "src", "database", "knex", "seeds" )
    },

    // vai ser executado no momento de estabelecer conexão com o banco de dados
    // foreign_keys = ON - quando deleta um ingrediente o prato tb é deletado

    pool:{
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },

    // propriedade padrão para trabalhar com o sqlite3
    useNullAsDefault: true
  }
};

// __dirname - partindo desta pasta