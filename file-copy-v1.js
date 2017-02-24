/****
	OLD VERSION SON
*****/

// call the readFilePromise function
// this returns a PROMISE which will resolve
// WHEN the file is read (this is an asynch operation)
fsPromise.readFilePromise('./package.json')
.then((data) => {
	// ^^^ WHEN the file is successfully read
	// run the code below
	// the data variable stores file content
	console.log(data)

	return fsPromise.fileWritePromise('copy.json', data);
})
.then((hasWritten) => {
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