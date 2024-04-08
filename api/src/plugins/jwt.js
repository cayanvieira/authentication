import jwtPlugin from '@fastify/jwt'
function plugin(fastify) {

    fastify.register(jwtPlugin, {
        secret: process.env.JWT_SECRET
    })

    const acl = [
        {
            path: "/",
            public: true
        },
        {
            path: "/private",
            public: false
        },
        {
            path: '/auth/signin',
            public: true
        },
        {
            path: "/user/signup",
            public: true
        },
        {
            path: "/user/verify",
            public: true
        },
    ]
    fastify.addHook('preValidation', async (request, reply) => {
        const route = acl.find(route => route.path === request.routeOptions.url)
        if (!route) {
            reply.code(404)
            reply.send(new Error('route not found'))
        }

        if (route.public == false) {
            try {
                await request.jwtVerify()
            } catch (err) {
                reply.send({ ...err, message: 'Token JWT não identificado' })
            }
        }

        return


    })
}

export default plugin



