const knex = require("../database/knex");

class DishesController{
  async create(request, response){
    const { name, description, ingredients, price, category_id  } = request.body;


    const [dish_id] = await knex("dishes").insert({
      name,
      description,
      price,
      category_id
    });

    const ingredientsInsert = ingredients.map(name => {
      return {
        dish_id,
        name
      }
    });

  
    await knex("ingredients").insert(ingredientsInsert);

    return response.status(201).json();
  
  }

  async show(request, response){
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();
    const ingredients = await knex("ingredients").where( {dish_id: id} ).orderBy("name");
    

    return response.json({
      ...dish,
      ingredients, 
    });
  }

  async delete(request, response){
    const { id } = request.params;

    await knex("dishes").where({ id }).delete();

    return response.json();
  }

  async search(request, response){
    const { searchTerm } = request.query;

    let dishes;
   
   if(searchTerm){
      
    const value= searchTerm.trim();

    dishes = await knex("ingredients")
    .distinct("dishes.id")
    .select("dishes.name",
    "dishes.description",
    "dishes.price",
    "dishes.category_id",
    "dishes.image")

    .whereLike("dishes.name", `%${value}%`)
    .orWhereLike("ingredients.name", `%${value}%`)
    .innerJoin("dishes", "dishes.id", "ingredients.dish_id")
    .orderBy("dishes.name")

    } else {
      dishes =  await knex("dishes")
     .orderBy("name");
    }
    
    return response.json(dishes);
  }

  async searchByCategory(request, response){
    const { category_id } = request.params;

    let dishes;

    if(category_id){
      
      dishes = await knex("dishes")
      .select([
        "dishes.id",
        "dishes.name",
        "dishes.category_id",
      ])
      .where("dishes.category_id", category_id)
      .orderBy("dishes.name")
  
      } else {
        dishes =  await knex("dishes")
       .orderBy("dishes.name")      
      }

      return response.json(dishes);

    
  }

  async update(request, response){
    const { id } = request.params;
    const {name, category_id, description, ingredients, price} = request.body;

    await knex("dishes").update({
      name,
      category_id,
      description,
      price
    }).where({id});

    const ingredientsInsert = ingredients.map(name => {
      return {
        dish_id: id,
        name
      }
    });

    await knex("ingredients").where({ dish_id: id }).delete();
    await knex("ingredients").insert(ingredientsInsert);

    
    return response.json();

    }

}


module.exports = DishesController;