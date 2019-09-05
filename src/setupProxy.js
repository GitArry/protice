const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/index.php', {
    target: 'https://m.uhouzz.com',
    changeOrigin: true
  }))
}