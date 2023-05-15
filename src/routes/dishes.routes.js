const {Router} = require("express");

const DishesController = require("../controllers/DishesController")

const dishesRoutes = Router();
const dishesController = new DishesController();

dishesRoutes.post("/", dishesController.create);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.get("/", dishesController.search);
dishesRoutes.get("/categories/:category_id", dishesController.searchByCategory);
dishesRoutes.delete("/:id", dishesController.delete);


module.exports = dishesRoutes