interface IProductionConfig {
  urlPrefix?: string;
  historyBackend?: string;
}

/* Config for production enviroment */

const config: IProductionConfig = {
  /*
   * 'public' url prefix is use for `gulp production` static files testing,
   * comment these lines because they are not in using so far.
   */
  // urlPrefix: '/public/',
  // historyBackend: 'browserHistory'

  // For github demo page, it changed to use hashHitory backend for relative
  // path support.
  historyBackend: 'hashHistory',
};

export default config;
