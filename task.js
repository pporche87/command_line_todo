const list = require('./commands/list')
const add = require('./commands/add')
const done = require('./commands/done')

const command = process.argv[2]
const todo = process.argv[3]

const run = () => {
	if (command === 'list') {
		list(console.log)
	} else if (command === 'add') {
		add(todo)
	} else if (command === 'done') {
		done(todo)
	}
}

run()
