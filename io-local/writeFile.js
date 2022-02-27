const fs = require('fs').promises;

const toWrite = "Mais um conteúdo.\n";

const writeFile = async (file) => {
	try {
		// A flag 'a' matém o conteúdo anterior e adiciona o novo no fim do arquivo 
		await fs.writeFile(file, toWrite, { flag: 'a' });
		console.log(`Arquivo ${file} atualizado.`);
	}
	catch (err) {
		console.error(`Erro ao escrever no arquivo ${file}:\n ${err.message}`);
	}
}

writeFile('./toRead.txt');

