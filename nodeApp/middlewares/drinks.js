const { drinks } = require('../mockDB');
const rescue = require('express-rescue');

const allDrinks = (_req, res) => {
	drinks.sort((a, b) => {
		return (a.name > b.name) ? 1 : -1;
	});

	res.status(200).json({ drinks });
}

const drinkById = rescue( async (req, res, next) => {
	const { id } = req.params;
	const drink = await drinks.find((drk) => drk.id == parseInt(id));

	if (!drink) return next({
		status: 404,
		code: "Erro drinkById.",
		message: "Bebida não encontrada."
	});

	res.status(200).json({ drink });
})

const drinkByName = rescue( async (req, res, next) => {
	const { name, maxPrice } = req.query;
	const drink = await drinks.filter((drk) => {
		return drk.name.includes(name) && drk.price < parseInt(maxPrice);
	})

	if (drink.length === 0) return next({
		status: 404,
		code: "Erro DrinkByName.",
		message: "Não há bebida com a palavra pesquisada."
	});

	res.status(200).json({ drink });
})

const addDrink = (req, res) => {
	const { id, name, price } = req.body;
	drinks.push({ id, name, price });
	res.status(201).json({ message: "Bebida adicionada com sucesso." });
}

const updateDrink = rescue( async (req, res, next) => {
	const { id } = req.params;
	const { name, price } = req.body;
	const drinkIndex =  await drinks.findIndex((drk) => drk.id === parseInt(id));

	if (drinkIndex === -1) return next({
		status: 404,
		code: "Erro updateDrink.",
		message: "Bebida não encontrada."
	});

	drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

	res.status(204).end();
})

const deleteDrink = rescue( async (req, res, next) => {
	const { id } = req.params;
	const drinkIndex = await drinks.findIndex((drk) => drk.id === parseInt(id));

	if (drinkIndex === -1) return next({
		status: 404,
		code: "Erro deleteDrink.",
		message: "Bebida não encontrada."
	});

	drinks.splice(drinkIndex, 1);

	res.status(204).end();
})

module.exports = {
	allDrinks,
	drinkById,
	drinkByName,
	addDrink,
	updateDrink,
	deleteDrink
};
