// Here's how I'd refactor the below functions to create a better separation of concerns and to make formatTodos() more declarative (i.e. more obvious as to _why_ it's doing what it's doing):

const getTodos = require('../get')

function formatTodos(todos) {
	return todos.map((todo) => {
		return `${todo.id}. ${todo.name}`
	})
}

function formatAndPrintTodos(todos) {
	const numTodos = todos.length
	const formattedTodos = formatTodos(todos)

	console.log('              ')
	console.log('ID Description')
	console.log('-- -----------')

	console.log(formattedTodos.join('\n'))

	console.log('          ')
	console.log(numTodos + ' tasks.')
	console.log('          ')
}

function list() {
	getTodos(function(error, todos, cb) {
		if (error) throw error
		const incompleteTodos = todos.filter((todo) => !todo.done)

		formatAndPrintTodos(incompleteTodos)
	})
}

module.exports = list
