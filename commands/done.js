const getTodos = require('../get')
const writeFile = require('../writeFile')

const done = (todoId) => {
	getTodos(function(error, todos) {
		if (error) throw error
		const todo = todos.find(todo => todo.id === parseInt(todoId))
		if (todo) {
			todo.done = true
			console.log(`Completed the task '${todo.name}'`)
		} else {
			console.log("Couldn't find todo")
		}
		const updatedTodosJson = JSON.stringify(todos)
		writeFile(updatedTodosJson)
	})
	return 'Done function ran'
}

module.exports = done
