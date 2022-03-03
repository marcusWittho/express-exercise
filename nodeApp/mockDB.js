const validUser = [
	{ username: "marcus", password: "1111" },
	{ username: "ananda", password: "2222" },
	{ username: "pudim", password: "3333" },
	{ username: "pipoca", password: "4444" }
]

const recipes = [
	{ id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
	{ id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
	{ id: 3, name: "Macarrão com molho branco", price: 37.0, waitTime: 25 }
]

const drinks = [
	{ id: 1, name: "Refri em lata", price: 5.0 },
	{ id: 2, name: "Refri 600ml", price: 8.0 },
	{ id: 3, name: "Suco 300ml", price: 4.0 },
	{ id: 4, name: "Suco 1L", price: 10.0 },
	{ id: 5, name: "Cerveja lata", price: 4.5 },
	{ id: 6, name: "Agua mineral 500ml", price: 5.0 },
]

module.exports = {
	validUser,
  recipes,
  drinks
};
