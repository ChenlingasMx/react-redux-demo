const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://localhost:3001/',
    changeOrigin: true,
    // pathRewrite: {
    //   '^/api': ''
    // }
  }))
  // app.use(createProxyMiddleware(
  //   '/demo',{target:"http://192.168.2.25/"}
  // ))
}