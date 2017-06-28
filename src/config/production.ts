interface IProductionConfig {
  router: {
    method: 'hash' | 'browser';
    basename: string;
  };
}

/* Config for production enviroment */

const config: IProductionConfig = {
  router: {
    method: 'hash',
    basename: 'react-redux-boilerplate',
  },
};

export default config;
