const getTodos = require('../get.js')
const writeFile = require('../writeFile')

// Having parameters with default values come before parameters without default values leads to some confusing code. For example, what would the values of your parameters be if you called `add('foo', (val) => { console.log(val) })` ?

function add(name, done=false, cb) {
	getTodos((error, todos) => {
		if (error) return cb(error)
		let id
		if (todos.length === 0) {
			id = 1
		} else {
			id = todos[todos.length-1].id+1 // this is assuming that your todos are sorted by id. Does your code ensure that?
		}
		const newTodos = todos.concat({id, name, done})
		const newTodosJson = JSON.stringify(newTodos)

		// While writeFile uses an asynchronous function `fs.writeFile()`, you are using it here as if it were synchronous. This is should be remedied by making sure that either (1) writeFile() actually _is_ synchronous or (2) rewriting your code so that writeFile() accepts a callback to run upon file success
		writeFile(newTodosJson)
		console.log('Created task ' + id + '.')
	})
	// This could be misleading because if writeFile() doesn't succeed, you still return from this function
	return 'Add function ran'
}

module.exports = add
