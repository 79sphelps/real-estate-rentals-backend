module.exports = (app) => {
  const rentals = require("../controllers/controller.js");
  const router = require("express").Router();

  router.post("/", rentals.create);
  router.get("/", rentals.findAll);
  router.get("/status", rentals.findAllDone);
  router.get("/:id", rentals.findOne);
  router.put("/:id", rentals.update);
  router.delete("/:id", rentals.delete);
  router.delete("/", rentals.deleteAll);

  app.use("/api/rentals", router);
};