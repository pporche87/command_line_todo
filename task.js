const list = require('./commands/list')
const add = require('./commands/add')
const done = require('./commands/done')

let command = process.argv[2]
let todo = process.argv[3]

const run = (command, todo) => {
	if (command === 'list') {
		list(console.log)
		return command
	} else if (command === 'add') {
		add(todo)
		return command
	} else if (command === 'done') {
		done(todo)
		return command
	}
}

run(command, todo)

module.exports = run
