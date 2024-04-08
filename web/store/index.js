import authStore from './auth'
import userStore from './user'
export default class Store {

    get auth() {
        return authStore()
    }
    get user() {
        return userStore()
    }

}