import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import axios from 'axios';

const fastify = Fastify({ logger: true });

fastify.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST'],
});

fastify.post('/proxy', async (request) => {
  const { url } = request.body;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    fastify.log.error(error);
    return { error: true, message: error.message };
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 3001 });
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
