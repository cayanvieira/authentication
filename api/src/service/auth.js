import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import redis from '../cache/client.js';
import knex from "../database/client.js";

class Service {
   async challenge(userId) {
      const key = `CodeToVerifyUser:${userId}`

      await redis.set(key, Math.trunc(Math.random() * 1000000), { EX: 60 * 60 * 2 });
      const code = redis.get(key)

      return code
   }

   async verifyUser(userEmail, codeConfirm) {
      const user = await knex("user")
         .where('email', userEmail)
         .select('id', 'name', 'checked')
         .first()

      if (!user) {
         return 'Usuário não encontrado'
      }
      if (!!user.check) {
         return 'Usuário já foi verificado'
      }

      const key = `CodeToVerifyUser:${user.id}`

      const code = await redis.get(key)
      console.log(key)
      if (!code) {
         return 'Código não existe ou está expirado'
      }

      if (code === codeConfirm) {

         // redis.del(key)

         return knex("user")
            .where('id', user.id)
            .update({
               checked: true
            }, 'id')
      }
      return 'Código incorreto'
   }

   async signIn(email, password) {


      if (!email) {
         throw "Campo e-mail vazio"
      }
      if (!password) {
         throw "Campo senha vazio"
      }

      const user = await knex("user")
         .select('name', 'email', 'password', 'id', 'checked')
         .where('email', email)
         .first()

      if (!user) {
         throw "Usuário não encontrado"
      }
      if (!user.checked) {
         return "Verificar usuário"
      }

      const checkPassword = await bcrypt.compare(password, user.password)

      if (!checkPassword) {
         throw 'Senha incorreta'
      }

      try {
         const secret = process.env.JWT_SECRET

         const token = jwt.sign(
            {
               payload: {
                  id: user.id,
                  email: user.email,
                  name: user.name,
                  cheked: user.checked
               }
            },
            secret,
         )

         return { message: 'Usuário autenticado com sucesso', token: token }

      } catch (err) {
         return 'Não foi possível autenticar o usuário'
      }

   }
}


export default Service