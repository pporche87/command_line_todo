const fs = require('fs')

const DATA_STORE = './tasks.json'

function getTodos(cb) {
	fs.readFile(DATA_STORE, 'utf8', (error, data) => {
		if(error) return cb(error)
		const todos = JSON.parse(data)
		cb(null, todos)
	})
}

module.exports = getTodos
