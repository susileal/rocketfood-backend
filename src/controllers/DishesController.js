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

  async index(request, response){
    const {  name, ingredients } = request.query;

    let dishes;
   
   if(ingredients){
      
    const filterIngredients= ingredients.split(',').map(ingredient => ingredient.trim());

    dishes = await knex("ingredients")
    .whereIn("name", filterIngredients)

    } else {
      dishes =  await knex("dishes")
     .whereLike("name", `%${name}%`)
     .orderBy("name");
    }

    return response.json(dishes);
  }

}

   /* 
   let dishes;
   
   if(ingredients){
      const filterIngredients= ingredients.split(',').map(ingredients => ingredients.trim());

       dishes = await knex("ingredients")
      .select([
        "dishes.id",
        "dishes.name",
      ])
      .whereLike("dishes.name", `%${name}%`)
      .whereIn("name", filterIngredients)
      .innerJoin("dishes", "dishes.id", "ingredients.dishes_id")
      .orderBy("dishes.name")

    } else {
      dishes =  await knex("dishes")
     .whereLike("name", `%${name}%`)
     .orderBy("name");
    }

    const userIngredients = await knex("ingredients");
    const dishesWithTags = dishes.map(dishes => {
    const dishIngredients = userIngredients.filter(ingredients => ingredients.dishes_id === dishes.id);

      return {
        ...dishes,
        ingredients: dishIngredients
      }
    })

   return response.json(dishesWithTags);



  }


  const dishes = await knex("dishes")
    .whereLike("dishes.name", `%${name}%`)
    .orderBy("name");

} */

module.exports = DishesController;