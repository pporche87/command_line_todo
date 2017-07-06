const getTodos = require('../get.js')
const writeFile = require('../writeFile')

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
		writeFile(newTodosJson)
		console.log('Created task ' + id + '.')
	})
	return 'Add function ran'
}

module.exports = add
