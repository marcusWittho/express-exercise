const validateBodyName = (req, res, next) => {
	const { name } = req.body;

	if (!name || name === '') return res.status(400)
		.json({ message: "Dados inválidos. (validateBodyName)" });

	next();
}

const validateQueryName = (req, res, next) => {
	const { name } = req.query;

	if (!name || name === '') return res.status(400)
		.json({ message: "Dados inválidos. (validateQueryName)" });

	next();
}

const validatePrice = (req, res, next) => {
	const { price } = req.body;

	if (
		!price
		|| typeof price !== 'number'
		|| price < 0
	)
	{
		return res.status(400).json({ message: "Dados inválido. (validatePrice)" });
	}

	next();
}

module.exports = {
	validateBodyName,
	validateQueryName,
	validatePrice
};
