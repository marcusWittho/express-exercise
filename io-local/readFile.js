const fs = require('fs').promises;

const readFile = async (toRead) => {
	try {
		const data = await fs.readFile(toRead, 'utf-8');
		console.log(`Conteúdo do arquivo:\n ${data}`);
	}
	catch(err) {
		console.error(`Erro ao ler o arquivo:\n ${err.message}`);
	}
}

readFile('./toRead.txt');

