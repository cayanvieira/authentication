import Service from '../service/index.js'

function plugin(fastify) {    
    fastify.decorate('service', new Service())
}

export default plugin