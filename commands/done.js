const fs = require('fs')
const getTodos = require('../get')
const DATA_STORE = './tasks.json'

const done = (todoId) => {
	getTodos(function(error, todos) {
		if (error) throw error
		console.log(`Completed the task '${todos[todoId].name}'`)
		todos.splice(todoId-1, 1)
		const updatedTodosJson = JSON.stringify(todos)
		fs.writeFile(DATA_STORE, updatedTodosJson)
	})
}

module.exports = done
