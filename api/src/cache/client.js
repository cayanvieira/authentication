import dotenv from 'dotenv';
import { createClient } from 'redis';
dotenv.config();

const client = createClient({
  url: `redis://${process.env.REDIS_HOST}`
})

client.on('error', err => console.log('Redis Client Error', err));
await client.connect()

export default client;