const express = require('express');
const router = express.Router();
const errorMiddleware = require('../middlewares/error-middleware');

const {
  validateBodyName,
  validateQueryName,
  validatePrice
} = require('../middlewares/validations');

const {
  allDrinks,
  drinkById,
  drinkByName,
  addDrink,
  updateDrink,
  deleteDrink
} = require('../middlewares/drinks');

router.get('/', allDrinks);

router.get('/search', validateQueryName, drinkByName);

router.get('/:id', drinkById);

router.post('/', validateBodyName, validatePrice, addDrink);

router.put('/:id', validateBodyName, validatePrice, updateDrink);

router.delete('/:id', deleteDrink);

router.use(errorMiddleware);

module.exports = router;
