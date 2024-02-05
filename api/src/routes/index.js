
import userRoutes from './user.js';

async function routes(fastify) {
    fastify.get('/', async (request, reply) => {

        return 'Server Online'
    })
    fastify.register(userRoutes, { prefix: '/user' })
}

export default routes