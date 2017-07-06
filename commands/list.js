function formatTodos(todos) {
	console.log(todos.map((todo, i) => `${todo.id}. ${todo.name}`).join('\n'))
	console.log('          ')
	console.log(todos.length + ' tasks.')
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
}

module.exports = list
