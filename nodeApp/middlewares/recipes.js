const { recipes } = require('../mockDB');
const rescue = require('express-rescue');

const allRecipes = (_req, res) => {
	res.status(200).json({ recipes });
}

const recipeById = rescue( async (req, res, next) => {
	const { id } = req.params;
	const recipe = await recipes.find((rcp) => rcp.id == parseInt(id));

	if (!recipe) return next({
		status: 404,
		code: "Erro recipeById",
		message: "Receita não encontrada."
	});

	res.status(200).json({ recipe });
})

const recipeByName = rescue( async (req, res, next) => {
	const { name } = req.query;
	const recipe = await recipes.filter((rcp) => rcp.name.includes(name));

	if (recipe.length === 0) {
		return next({
			status: 404,
			code: "Erro recipeByName",
			message: "Nenhuma receita encontrada."
		})
	}

	res.status(200).json({ recipe });
})

const addRecipe = (req, res) => {
	const { id, name, price, waitTime } = req.body;
	const { username } = req.user;
	recipes.push({ id, name, price, waitTime, chef: username });
	res.status(201).json({ message: "Receita adicionada com sucesso." });
}

const updateRecipe = rescue( async (req, res, next) => {
	const { id } = req.params;
	const { name, price } = req.body;
	const recipeIndex = await recipes.findIndex((rcp) => rcp.id === parseInt(id));

	if (recipeIndex === -1) return next({
		status: 404,
		code: "Erro updateRecipe.",
		message: "Receita não encontrada."
	});

	recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

	res.status(204).end();
})

const deleteRecipe = rescue( async (req, res, next) => {
	const { id } = req.params;
	const recipeIndex = await recipes.findIndex((rcp) => rcp.id === parseInt(id));

	if (recipeIndex === -1) return next({
		status: 404,
		code: "Erro updateRecipe.",
		message: "Receita não encontrada."
	});

	recipes.splice(recipeIndex, 1);

	res.status(204).end();
})

module.exports = {
	allRecipes,
	recipeById,
	recipeByName,
	addRecipe,
	updateRecipe,
	deleteRecipe
};
