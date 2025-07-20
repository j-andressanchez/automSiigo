const environments = {
  dev: {
    baseUrl: 'https://dev.endpoint.com',
  },
  qa: {
    baseUrl: 'https://qastaging.siigo.com/#/login',
  },
  prod: {
    baseUrl: 'https://endpoint.com',
  },
};

const environment = process.env.ENV || 'qa';
export const config = environments[environment];