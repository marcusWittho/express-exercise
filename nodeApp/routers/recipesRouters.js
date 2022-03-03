const express = require('express');
const router = express.Router();
const errorMiddleware = require('../middlewares/error-middleware');

const {
  validateBodyName,
  validateQueryName,
  validatePrice
} = require('../middlewares/validations');

const {
  allRecipes,
  recipeById,
  recipeByName,
  addRecipe,
  updateRecipe,
  deleteRecipe
} = require('../middlewares/recipes');

router.get('/', allRecipes);

router.get('/search', validateQueryName, recipeByName);

router.get('/:id', recipeById);

router.post('/', validateBodyName, validatePrice, addRecipe);

router.put('/:id', validateBodyName, validatePrice, updateRecipe);

router.delete('/:id', deleteRecipe);

router.use(errorMiddleware);

module.exports = router;
