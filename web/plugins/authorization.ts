import authStore from '../store/auth'
export default defineNuxtPlugin(() => {
    addRouteMiddleware((to, from) => {

        const store = authStore()
        const cookie = useCookie('userToken')

        if (!cookie.value && to.path != '/' && to.path != '/register') {
            return navigateTo('/')
        }

        if (cookie.value != undefined) {
            store.setTokenInCookie(cookie.value)
        }



    })
})