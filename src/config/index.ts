import productioConfig from './production';

interface IConfig {
  historyBackend?: string;
  urlPrefix?: string;
}

/* Default config for develope enviroment */
const devConfig: IConfig = {
  /* React router history backend */
  historyBackend: 'browserHistory',

  /* The app placed path prefix, for development server, it used '/' by default,
   * For github demo page, it will changed to 'react-redux-boilerplate'.
   */
  urlPrefix: '/',
};

const config = (() => {
  /* Construct configs from environment */
  if (process && process.env.NODE_ENV === 'production') {
    return { ...devConfig, ...productioConfig };
  }
  return devConfig;
})();

/* Freezed the config object, make it not able to be modified */
Object.freeze(config);

/* Export config */
export default config;
