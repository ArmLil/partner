'use strict'
const Path = require('path');
const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')

const routes = require('./routes')

const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 3000,
  labels:['frontend'],
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public')
    }
  }
})

server.register(Inert, (error) => {
    if (error) console.error(('register error'), error)
    server.route(routes)
})

server.start((err) => {
    if(err) console.error(err)
    console.log(`Server running at: ${server.info.uri}`);
});
