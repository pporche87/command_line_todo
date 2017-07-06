const fs = require('fs')
const DATA_STORE = './tasks.json' // this line is repeated in many places. You should DRY it up; the duplication will lead to errors

// Seems like this module and the `writeFile.js` module could be refactored into a single module with two files, since they are so closely related. Maybe a `todoStore.js` module, with functions `writeTodos()` and `getTodos()`.

function getTodos(cb) {
	fs.readFile(DATA_STORE, 'utf8', (error, data) => {
		if(error) return cb(error)
		const todos = JSON.parse(data)
		cb(null, todos)
	})
	return 'This function is running' // why do you need this?
}

module.exports = getTodos
