const fs = require('fs')
const DATA_STORE = './tasks.json'

function writeFile(jsonString) {
	fs.writeFile(DATA_STORE, jsonString, (error) => {
		if (error) throw error
	})
}

module.exports = writeFile
