const { Router } = require("express")

const SessionsController = require("../controllers/SessionsController")

// instanciando na memória

const sessionsController = new SessionsController();

const sessionsRoutes = Router();

sessionsRoutes.post("/", sessionsController.create );

module.exports = sessionsRoutes;


