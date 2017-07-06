const getTodos = require('../get')
const writeFile = require('../writeFile')

// Similarly to your `get.js` and `writeFile.js` modules, you could combine all
// the modules within commands/ to a single `commands.js` module (since each of
// them only have one file in them anyways). This would also help reduce the
// duplication between the different commands. 
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
