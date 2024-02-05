import redis from '../cache/client.js';
import knex from "../database/client.js";


class Service {
   async challenge(userId) {
      const key = `CodeToVerifyUser:${userId}`

      await redis.set(key, Math.trunc(Math.random() * 1000000), { EX: 60 * 60 * 2 });
      const code = redis.get(key)

      return code
   }

   async verifyAccount(userId, codeConfirm) {
      const user = await knex("user")
         .where('id', userId)
         .select('id', 'name', 'checked')

      if (!user) {
         return 'Usuário não encontrado'
      }
      if (!!user.check) {
         return 'Usuário já foi verificado'
      }

      const key = `CodeToVerifyUser:${userId}`

      const code = await redis.get(key)

      console.log([code, codeConfirm])

      if (!code) {
         return 'Código não existe ou está expirado'
      }

      if (code === codeConfirm) {

         redis.del(key)

         return knex("user")
            .where('id', userId)
            .update({
               checked: true
            }, 'id')
      }
      return 'Código incorreto'
   }
}

export default Service