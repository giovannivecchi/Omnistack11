const express = require("express");
const routes = express.Router();
const ongController = require("./controllers/ongController");
const IncidentController = require("./controllers/IncidentController");
const profileController = require("./controllers/profileController");
const sessionController = require("./controllers/sessionController");


routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);
routes.post("/incidents", IncidentController.create);
routes.get("/incidents", IncidentController.index);
routes.delete("/incidents/:id", IncidentController.delete);
routes.get("/profile", profileController.index);
routes.post('/session', sessionController.create)
module.exports = routes;
