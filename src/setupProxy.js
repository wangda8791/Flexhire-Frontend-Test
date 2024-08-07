const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://flexhire.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/v2',
      },
    })
  );
};