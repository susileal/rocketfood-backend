const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")


class DishImageController {
  async update(request, response){
    const {id} = request.params;
    const imageFilename = request.file.filename;


    const diskStorage = new DiskStorage();

    const dish = await knex("dishes")
    .where({ id }).first();

    if(!dish){
      throw new AppError("Esse prato não existe", 404)
    }

    if(dish.image){
      await diskStorage.deleteFile(dish.image);
    }

    const filename = await diskStorage.saveFile(imageFilename);
    dish.image = filename;

    await knex("dishes").update(dish).where({ id });

    return response.json(dish);
  }
}

module.exports = DishImageController;