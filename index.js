const fsPromise = require('./fs-promise');

fsPromise.readFilePromise('./paaslkdjfckage.json')
.then((data) => {
	console.log(data)
})
.catch((reason) => {
	console.log('LOL something went wrong!');
	if (reason.code === 'ENOENT') {
		console.log('File could not be found')
	}
});


fsPromise.fileWritePromise('app.js', `(() => {
	console.log('hello, wrold!')
})()`).then((hasWritten) => {
	if (hasWritten) {
		console.log('Wrote the file successfully')
	}
})
.catch((reason) => {
	console.log('FAILED BECAUSE...');
	console.log(reason)
})

const fsScripts = require('./fs-copy');
fsScripts.fileCpy('./package.json').then((hasWritten) => {
	if (hasWritten) {
		console.log('done')
	}
})
.catch((reason) => {
	// ^^^ IF the file read fails for whatever reason
	// THEN, run the code below
	// error handle
	console.log('LOL something went wrong!');
	if (reason.code === 'ENOENT') {
		console.log('File could not be found')
	}
});



















