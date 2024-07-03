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

fastify.get('/games', async (request, reply) => {
  const { ids, cc: countryCode } = request.query
  const gameIds = ids.split(',')

  try {
    const gameAndReviewRequests = gameIds.map(id => 
      Promise.all([
        axios.get(`https://store.steampowered.com/api/appdetails?appids=${id}&cc=${countryCode}`).then(r => r.data[id]),
        axios.get(`https://store.steampowered.com/appreviews/${id}?json=1&filter=updated&language=all&review_type=all&purchase_type=all&num_per_page=0&filter_offtopic_activity=0`).then(r => r.data)
      ])
    );

    const responses = await Promise.all(gameAndReviewRequests);
    const combinedData = responses.map(([gameResponse, reviewResponse]) => {
      console.log(gameResponse)
      console.log(reviewResponse)

      if (gameResponse.success && reviewResponse.success) {
        return {
          ...gameResponse.data,
          reviews: reviewResponse.query_summary
        };
      } else {
        throw new Error('Unexpected error in one of the responses');
      }
    });

    reply.send(combinedData);
  } catch (error) {
    fastify.log.error(error);
    reply.send({ error: true, message: error.message });
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
