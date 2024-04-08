
import authRoutes from './auth.js';
import userRoutes from './user.js';

async function routes(fastify) {
    fastify.get('/', async (request, reply) => {

        return 'Servidor Online'
    })
    fastify.get('/private', async (request, reply) => {

        return request.user.payload
    })
    fastify.register(userRoutes, { prefix: '/user' })
    fastify.register(authRoutes, { prefix: '/auth' })
}

export default routes