/***
	this is the hardcore version
***/

const fsPromise = require('./fs-promise');

const copy = (srcFile, copyFile) => {
	if (typeof copyFile === "undefined") {
		copyFile = srcFile+'.copy'
	}

	if (copyFile === srcFile) {
		return Promise.reject('Names are the same...')
	}

	const read = fsPromise.readFilePromise(srcFile);
	const write = read.then((data) => fsPromise.fileWritePromise(copyFile, data));

	return write;
}; // copy

module.exports = {
	fileCpy: copy
}
