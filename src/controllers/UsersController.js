const { hash, compare } = require("bcryptjs");

const AppError = require("../utils/AppError");

const knex = require("../database/knex");

class UsersController{

  async create(request, response) {

    const {name, email, password} = request.body;

    const checkUserExists = await knex("users").where({ email }).first();

    if(checkUserExists){
      throw new AppError("Este email já está em uso");
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({name, email, password: hashedPassword})

    return response.status(201).json();
  };

  // rota para atualizar o usuário
 async update(request, response){
  const { name, email, password, old_password} = request.body;

  // não precisa mais pegar o id do usuário pelo parâmetro pelo const { id } = request.params;
  const id = request.user.id;

  const user = await knex("users").where({ id }).first();

  if(!user){
    throw new AppError("Usuário não encontrado");
  }

  // verificar se o email existe

  const userWithUpdateEmail = await knex("users").where({ email }).first();

  if(userWithUpdateEmail && userWithUpdateEmail.id != user.id){
    throw new AppError("Este email já está em uso");
  }

  /* se existir o conteúdo dentro de name, 
  então este que vai ser utilizado, se não existir o que vai ser utilizado é o user.name */

  user.name = name ?? user.name;
  user.email = email ?? user.email;

  // verificando se foi digitado a senha antiga
  if(password && !old_password){
    throw new AppError("Você precisa digitar a senha antiga para definir a nova senha");
  }
  
  //verificar se a senha antiga é igual a senha que está cadastrada no banco

  if(password && old_password){
    const checkOldPassword = await compare(old_password, user.password);

    // se for falso significa dizer que a senha não é igual

    if(!checkOldPassword){
      throw new AppError("A senha antiga não confere");
    }

    // se tudo confere será atualizado

    user.password = await hash(password, 8);
  }

 await knex("users").update({
    name: user.name,
    email: user.email,
    password: user.password
  }).where({id});

  // retornar o status de sucesso

  return response.json();
}
}

 

module.exports = UsersController;