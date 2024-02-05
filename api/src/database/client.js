import knex from 'knex'
import knexfile from './config.js'

const  myknex = knex(knexfile.development)

export default myknex
  
