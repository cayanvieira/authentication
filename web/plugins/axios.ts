import connection from "axios";
export default defineNuxtPlugin((nuxtApp) => {

    const defaultUrl = "http://localhost:3000"
    const userToken = null
    let axios = connection.create({
        baseURL: defaultUrl,
        headers: {
            'Authorization': `Bearer ${userToken}`
        }
    });
    return {
        provide: {
            axios: axios,
        },
    };
});