const API = {
  protocol: 'http',
  hostname: '127.0.0.1',
  port: '30707',
  pathname: '/apis',
};

module.exports = {
  publicPath: '/plugins/tenant-data-subscription',
  basePath: '/tenant-data-subscription',
  client: {
    documentTitle: 'tKeel',
  },
  server: {
    port: '3008',
    proxy: {
      [API.pathname]: `${API.protocol}://${API.hostname}:${API.port}`,
    },
  },
  api: API,
};