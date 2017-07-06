const list = require('./commands/list')
const add = require('./commands/add')
const done = require('./commands/done')

// If you're going to export the function, you shouldn't run it beforehand. This
// file should _either_ be used as a module (i.e. imported) _or_ as a script
// (i.e. executed from the command line). Here's how I'd rewrite it:
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

	// The above code doesn't provide much useful information if none of the
	// conditions are met: if the user has a typo in their command, they should
	// receive an error message
	// Also, to be more defensive, it should confirm the existince of the `todo`
	// variable and make sure that it is (or can be converted to) the correct data type
}

module.exports = run

if (!module.parent) {
	// If this file is not being required (i.e. used as a module), then it means
	// it's being used as a script 
	let command = process.argv[2]
	let todo = process.argv[3]
	run(command, todo)
}
