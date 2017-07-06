function formatTodos(todos) {
	let counter = 0
	todos.forEach((todo) => {
		if (todo.done === false) {
			counter++
			console.log(`${todo.id}. ${todo.name}`)
		}
	})
	console.log('          ')
	console.log(counter + ' tasks.')
	console.log('          ')
}

const getTodos = require('../get')
function list() {
	console.log('              ')
	console.log('ID Description')
	console.log('-- -----------')
	getTodos(function(error, todos, cb) {
		if (error) throw error
		formatTodos(todos)
	})
	return 'List function ran'
}

module.exports = list
