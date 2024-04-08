import { useCookie } from '#app/composables/cookie';
import { defineStore } from 'pinia';


const auth = defineStore('auth', {
    state: () => ({
        userToken: null,
        originalToken: 'a'
    }),
    getters: {

    },
    actions: {
        async signin(form) {
            try {
                const data = await $fetch("http://localhost:3000/auth/signin", { method: 'POST', body: { email: form.email, password: form.password } })

                if (data === 'Verificar usuário') {
                    const router = useRouter();
                    return router.push("/verifyUser");
                }
                this.setTokenInCookie(data.token)
                return data
            } catch (error) {

                return error
            }

        },
        async private() {
            return await $fetch("http://localhost:3000/private", { method: 'GET', headers: { Authorization: this.userToken } });
        },
        setTokenInCookie(token) {
            const cookie = useCookie('userToken')
            cookie.value = token
            this.userToken = `Bearer ${cookie.value}`
        }
    }
})

export default auth