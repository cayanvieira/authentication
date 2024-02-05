import Auth from './auth.js'
import Email from './email.js'
import User from './user.js'



class Service {

    #Auth 
    #User 
    #Email

    get Auth() {
        if (!this.#Auth) {
            this.#Auth = new Auth()
        }
        return this.#Auth
    }

    get User() {
        if (!this.#User) {
            this.#User = new User()
        }
        return this.#User
    }

    get Email() {
        if (!this.#Email) {
            this.#Email = new Email()
        }
        return this.#Email
    }



}

export default Service