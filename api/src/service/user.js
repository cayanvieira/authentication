import bcrypt from "bcrypt"
import knex from "../database/client.js"

class Service {

  async signup(user, reply) {

    if (!user.email) {
      return { message: "O campo 'e-mail' é obrigatorio" }
    }

    const userExist = await knex('user')
      .where('email', user.email)
      .first()

    if (userExist) {
      return { message: `E-mail já casdatrado.` }
    }

    if (!user.name) {
      throw { message: "O campo 'nome' é obrigatorio" }
    }

    if (!user.password) {
      return { message: "O campo 'senha' é obrigatorio" }
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(user.password, salt)

    try {

      const userInsert = await knex("user")
        .insert({
          name: user.name,
          birthData: user.birthData,
          email: user.email,
          password: hash,
          sex: user.sex,
          uf: user.uf,
          administer: false,
          checked: false
        }, ['id', 'email'])
      return userInsert.pop()
    }
    catch {
      throw 'Erro ao cadastrar'
    }
  }
}

export default Service