const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authMiddleware = require('./middlewares/auth-middleware');
const recipesRouter = require('./routers/recipesRouters');
const drinksRouter = require('./routers/drinksRouters');

const PORT = 3001;

const app = express();
app.use(bodyParser.json());

app.use(cors());  // necessário para integrar front-end e back-end

app.use(authMiddleware);

app.use('/recipes', recipesRouter);
app.use('/drinks', drinksRouter);

app.all('*', (req, res) => {
	return res.status(404).json({ message: `Rota '${req.path}' não existe.` });
})

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});
