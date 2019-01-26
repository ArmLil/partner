'use strict'

const tooBusy = require('toobusy-js')

const Routes = []
module.exports = Routes

Routes.push({
  method: 'GET',
  path: '/{param*}',
  handler: function(request, reply) {
    console.log('hereee')
      reply.file('js/index.html')
  }
})

Routes.push({
  method: 'GET',
  path: '/js/{param*}',
  handler: {
    directory: {
      path: 'js'
    }
  }
})

Routes.push({
  method: 'GET',
  path: '/font/{param*}',
  handler: {
      directory: {
          path: 'font'
      }
  }
})

Routes.push({
  method: 'GET',
  path: '/img/{param*}',
  handler: {
      directory: {
          path: 'img'
      }
  }
})

Routes.push({
  method: 'GET',
  path: '/css/{param*}',
  handler: {
      directory: {
          path: 'css'
      }
  }
})

Routes.push({
  method: 'GET',
  path: '/health',
  config:{
    auth:false,
    description: 'Health Check',
    tags: ['api','lsq','Health'],
    handler: function (request, reply) {
      reply(tooBusy.lag()+"")
    }
  }
})
