const chai = require('chai')
const { expect } = require('chai')
const chaiChange = require('chai-change')
const run = require('./task')
const getTodos = require('./get')
const fs = require('fs')
const DATA_STORE = './tasks.json'
const list = require('./commands/list')
const add = require('./commands/add')
const done = require('./commands/done')

chai.use(chaiChange)

describe('run', () => {
	'use strict'

	it('exists', () => {
		expect(run).to.be.a('function')
	})

	it('exists', () => {
		expect(getTodos).to.be.a('function')
	})

	it('exists', () => {
		expect(list).to.be.a('function')
	})

	it('exists', () => {
		expect(add).to.be.a('function')
	})

	it('exists', () => {
		expect(done).to.be.a('function')
	})

	const data = []
	data.push(
		{ id: 1, name: 'Walk the dog', done: false },
		{ id: 2, name: 'Wash the clothes', done: false },
		{ id: 3, name: 'Schedule movie night', done: false }
	)
	const dataJson = JSON.stringify(data)
	fs.writeFile(DATA_STORE, dataJson, (error) => {
		if (error) throw error
		console.log('New Todos Added')
	})

	context('run()', () => {
    it('takes a command from bash and runs it through a function that parses the data and passes to a specific function', () => {
      expect(run('list') ).to.equal('list')
      expect(run('add') ).to.equal('add')
      expect(run('done') ).to.equal('done')
    })
  })

	context('get()', () => {
		it('gets all todos from the tasks.json', () => {
			expect(getTodos() ).to.equal('This function is running')
		})
	})

	context('list()', () => {
		it('gets a list of the current todos', () => {
			expect(list() ).to.equal('List function ran')
		})
	})

	context('add()', () => {
		it('adds a list to the end of the list', () => {
			expect(add('Follow on Instagram') ).to.equal('Add function ran')
		})
	})

	context('done()', () => {
		it('completes a todo and deletes it', () => {
			expect(done() ).to.equal('Done function ran')
		})
	})
})
