

async function routes(fastify) {
    fastify.post('/signin', async (request) => {

        const { email, password } = request.body
        const auth = fastify.service.Auth.signIn(email, password)
        return auth
    })

}

export default routes