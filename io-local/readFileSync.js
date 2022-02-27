const fs = require('fs');

const toRead = './toRead.txt';

try {
	const data = fs.readFileSync(toRead, 'utf-8');
	console.log(`Conteúdo do arquivo ${toRead}:\n ${data}`);
}
catch (err) {
	console.error(`Erro ao ler o arquivo ${err.path}`);
}

