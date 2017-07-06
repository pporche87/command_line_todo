const fs = require('fs')
const getTodos = require('../get.js')
const DATA_STORE = './tasks.json'

function add(name, done=false, cb) {
	getTodos((error, todos) => {
		if (error) return cb(error)
		let id
		if (todos.length === 0) {
			id = 1
		} else {
			id = todos[todos.length-1].id+1
		}
		const newTodos = todos.concat({id, name, done})
		const newTodosJson = JSON.stringify(newTodos)
		fs.writeFile(DATA_STORE, newTodosJson, cb)
		console.log('Created task ' + id + '.')
	})
}

module.exports = add
