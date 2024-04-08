import Cors from "@fastify/cors"
export default (fastify) => {
  fastify.register(Cors, {
    origin: '*'
  })
}
