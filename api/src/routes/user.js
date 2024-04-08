async function routes(fastify, options) {

    fastify.post('/signup', async (request) => {
        console.log('asquasd')
        const { email, name, password } = request.body
        const user = await fastify.service.User.signup({ email, name, password })

        const code = await fastify.service.Auth.challenge(user.id)

        if (!user.email) return user

        return fastify.service.Email.send({
            template: {
                name: 'verify_account',
                data: {
                    challenge_code: code
                }
            },
            body: null,
            from: process.env.NODE_MAIL_EMAIL,
            to: user.email,
            subject: null,

        })
    })

    fastify.put('/verify', async (request) => {
        const { userEmail, codeConfirm } = request.body

        return fastify.service.Auth.verifyUser(userEmail, codeConfirm)
    })

}

export default routes