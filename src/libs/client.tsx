import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: 'cpphtg5uhq',
  apiKey: process.env.API_KEY as string,
});

export { client };
