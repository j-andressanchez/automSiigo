const environments = {
  dev: {
    baseUrl: 'https://dev.endpoint.com',
  },
  qa: {
    baseUrl: 'https://google.com',
  },
  prod: {
    baseUrl: 'https://endpoint.com',
  },
};

const environment = process.env.ENV || 'qa';
export const config = environments[environment];