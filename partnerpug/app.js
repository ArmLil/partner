'use strict'
const Path = require('path');
const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const LSQ = require('lsq')
const HapiAuthCookie = require('hapi-auth-cookie') // sessions, places cookies, basic auth
const catboxRedis = require('catbox-redis') // needs redis running

let server
const routes = require('./routes')

LSQ.config.get()
.then(Config => {
  server = new Hapi.Server({
    cache: [
        {
          name: 'redisCache',
          engine: catboxRedis,
          host: Config.session.redis.host,
          port: Config.session.redis.port,
          password: Config.session.redis.pass,
          database: Config.session.redis.db,
          partition: 'cache'
        }
      ]
  })

  server.connection({
    port: process.env.PORT || 3000,
    router: {
      stripTrailingSlash: true
    },
    labels:['frontend'],
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  })

  server.register([
    Inert,
    Vision,
    HapiAuthCookie
  ], (error) => {
      if (error) console.error(('register error'), error)
      server.views({
        engines: { pug: require('pug') },
        path: __dirname + '/public/templates',
        compileOptions: { pretty: true }
      })
      server.route(routes)
  })

  const cache = server.cache({
    cache: 'redisCache',
    segment: 'sessions',
    expiresIn: 3 * 24 * 60 * 60 * 1000
  })

  //Baisc auth using hapi-auth-cookies
  server.app.cache = cache

  //basic auth session setup
  //with using the cache, check the cache whenever you have a cookie
  server.auth.strategy('session', 'cookie', true, {
    password: Config.session.secret,
    cookie: 'session',
    isSecure: false,
    redirectTo: false,
    validateFunc: function (request, session, callback) {
      cache.get(session.sid, (err, cached) => {
        if (err) throw err
        if (!cached) return callback(null, false)
        return callback(null, true, cached.account)
      })
    }
  })

  return
})
.then(() => {
  server.start((err) => {
      if(err) console.error('Opps', err)
      console.log(`Server running at: ${server.info.uri}`);
  });
})
