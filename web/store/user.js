import axios from 'axios'
import { defineStore } from 'pinia'


axios.defaults.baseURL = "http://localhost:3000"


const user = defineStore('user', {
    state: () => ({
        userToken: null
    }),
    getters: {
    },
    actions: {
        async signup(form) {
            const response = await axios.post("/user/signup", { email: form.email, name: form.name, password: form.password })
            return response
        },

        async verify(form) {
            const response = await axios.put("/user/verify", { userEmail: form.email, codeConfirm: form.code })
            console.log(response)
            if (response.data[0].id) {
                const router = useRouter();
                return router.push("/");
            }
            return response

        }

    }
})

export default user