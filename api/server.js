import * as Dotenv from 'dotenv'
import Fastify from 'fastify'
import Cors from './src/plugins/cors.js'
import JWT from './src/plugins/jwt.js'
import Service from './src/plugins/service.js'
import Routes from './src/routes/index.js'

//database
import './src/database/client.js'

//redis
import './src/cache/client.js'

//cors

Dotenv.config()

const fastify = Fastify({
  logger: true
})

//Rotas
Routes(fastify)

//plugins
Service(fastify)
JWT(fastify)
Cors(fastify)

const start = async () => {
  try {
    await fastify.listen({ host: process.env.HOST, port: process.env.PORT })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }

}
start()