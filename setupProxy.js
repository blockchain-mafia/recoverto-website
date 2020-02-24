const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy({
      target: 'http://localhost:9000',
      "pathRewrite": {
        "^/\\.netlify/functions": ""
      },
      changeOrigin: true
    })
  )
}