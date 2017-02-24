const fsPromise = require('./fs-promise');

const copy = (srcFile, copyFile) => {
	if (typeof copyFile === "undefined") {
		copyFile = srcFile+'.copy'
	}

	if (copyFile === srcFile) {
		return Promise.reject('Names are the same...')
	}

	return fsPromise.readFilePromise(srcFile).then((data) => {
			return fsPromise.fileWritePromise(copyFile, data);
		});
}; // copy

module.exports = {
	fileCpy: copy
}
