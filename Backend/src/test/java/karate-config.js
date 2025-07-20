function fn() {
  var env = karate.env;

  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'qa';
  }

  var config = {
    urlBase: 'https://reqres.in/api'
  }

  return config;
}