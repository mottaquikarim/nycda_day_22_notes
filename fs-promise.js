const fs = require('fs');

const read = (file, encoding = 'utf8') => {
	return new Promise((resolve, reject) => {
		fs.readFile(file, encoding, (err,data) => {
			if (err) reject(err);
			else resolve(data)
		});
	});
}; // file read

const write = (fileName, text, encoding = 'utf8') => {
	return new Promise((resolve, reject) => {
		fs.writeFile(fileName, text, encoding, (err) => {
		  if (err) reject(err)
		  else resolve(true);
		});
	});
}; // file write


module.exports = {
	readFilePromise: read,
	fileWritePromise: write,
};