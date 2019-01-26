'use strict'
const Hapi =require('hapi')
const Inert = require('inert')
const tooBusy = require('toobusy-js')

// starts server
let Server = new Hapi.Server()

Server.connection({
  port: process.env.PORT || 3000,
  labels:['tcp']
})

Server.register([Inert], (error) => {
  if (error) console.error(('register error'), error)

  Server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      file: {
        // path: 'public/index.html'
        path: 'public/js/index.html'
      }
    }
  })
  Server.route({
    method: 'GET',
    path: '/js/{param*}',
    handler: {
      directory: {
        path: 'public/js'
      }
    }
  })
  Server.route({
    method: 'GET',
    path: '/font/{param*}',
    handler: {
        directory: {
            path: 'public/font'
        }
    }
  })
  Server.route({
    method: 'GET',
    path: '/img/{param*}',
    handler: {
        directory: {
            path: 'public/img'
        }
    }
  })
  Server.route({
    method: 'GET',
    path: '/css/{param*}',
    handler: {
        directory: {
            path: 'public/css'
        }
    }
  })

  Server.route({
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

  Server.start( function(err) {
    if (err) throw err
    console.log('Server running on port:', Server.info.uri)
  })

})
