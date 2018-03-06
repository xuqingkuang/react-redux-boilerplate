interface IConfig {
  historyBackend?: string;
  urlPrefix?: string;
}

/* Default config for develope enviroment */
let config: IConfig = {
  /* React router history backend */
  historyBackend: 'browserHistory',

  /* The app placed path prefix, for development server, it used '/' by default,
   * For github demo page, it will changed to 'react-redux-boilerplate'.
   */
  urlPrefix: '/',
};

/* Construct configs from environment */
if (process && process.env.NODE_ENV === 'production' ) {
  config = {...config, ...require('./production').default};
}

/* Freezed the config object, make it not able to be modified */
Object.freeze(config);

/* Export config */
export default config;
