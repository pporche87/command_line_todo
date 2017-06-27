// built into node for file system stuff
const fs = require('fs')
// this is optional, store in personal home directory
const os = require('os')

const DATA_STORE = `${os.homedir()}/.tasks.json`

function getTodos(cb) {
	fs.readFile(DATA_STORE, 'utf8', (error, data) => {
		if(error) cb(error)
		const todos = JSON.parse(data)
		cb(null, todos)
	})
}

function formatTodos(todos) {
	todos.map((todo, i) => `${i+1}. ${todo.name}`)
			 .join('\n')
}

function addTodo(name, cb) {
	getTodos((error, todos) => {
		if (error) return cb(error)
		const newTodos = todos.concat({name})
		const newTodosJson = JSON.stringify(newTodos)
		fs.writeFile(DATA_STORE, newTodosJson, cb)
	})
}

function run() {
	const action = process.argv[2]
	switch (action) {
		case 'add':
			const name = process.argv[3]
		 	addTodo(name, error => {
				if (error) throw error
				getTodos((error, todos) => console.log(formatTodos(todos)))
			})
			break
		default:
		getTodos((error, todos) => console.log(formatTodos(todos)))
	}
}

run()

addTodo('Walk the dog', (error) => {
	if (error) throw error
	getTodos((error, todos) => console.log(todos))
})
