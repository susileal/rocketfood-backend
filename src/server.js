const express = require("express");

const app = express();

app.get("/message/:id/:user", (request, response) => {
  const {id, user} = request.params;
  response.send(`
  Id da mensagem é: ${id}.
  O nome do usuário é: ${user}.
  `)

})

app.get("/users", (request, response) => {
  const {page, limit} = request.query;
  response.send(`
  A página é: ${page}.
  O limite é: ${limit}.
  `)
});

const PORT = 3333;
app.listen(PORT, ( ) => console.log(`Server is running on Port ${PORT}`))