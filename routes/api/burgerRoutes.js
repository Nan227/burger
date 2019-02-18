const router = require("express").Router();
const burgersController = require("../../controllers/burgerController.js");

// define API routes

// when user hits /api/todos
router
  .route("/")
  .get(burgersController.findAll)
  .post(burgersController.createBurger);


// when user hits /api/todos/:id
router
  .route("/:id")
  .get(burgersController.findById)
  .put(burgersController.updateBurger)
  .delete(burgersController.deleteBurger);

module.exports = router;
