const { validUser } = require('../mockDB');

const authMiddleware = (req, res, next) => {
	const { username, password } = req.headers;

	if (!username || !password) return res.status(401)
		.json({ message: "Username ou password não podem ficar em branco." });

	const foundUser = validUser.find((user) => user.username === username);

	if (!foundUser) return res.status(401).json({ message: "Dados inválidos." });

	if (username !== foundUser.username || password !== foundUser.password) {
		return res.status(401).json({ message: "Dados inválidos. (authMiddleware)" });
	}

	req.user = foundUser;

	next();
}

module.exports = authMiddleware;
