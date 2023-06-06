const {Router} = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const DishesController = require("../controllers/DishesController")
const DishImageController = require("../controllers/DishImageController")


const dishesRoutes = Router();
const dishesController = new DishesController();
const dishImageController = new DishImageController();
const upload = multer(uploadConfig.MULTER);



dishesRoutes.post("/", dishesController.create);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.get("/", dishesController.search);
dishesRoutes.get("/categories/:category_id", dishesController.searchByCategory);
dishesRoutes.delete("/:id", dishesController.delete);
dishesRoutes.patch("/:id/image", upload.single("image"), dishImageController.update);



module.exports = dishesRoutes