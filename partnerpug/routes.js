'use strict'
const tooBusy = require('toobusy-js')
const Handlers = require('./handlers')

const Routes = []
module.exports = Routes

Routes.push({
  method: 'GET',
  path: '/static/{param*}',
  handler: (req, reply) => {
    return reply.file(req.params.param)
  },
  config: {
    auth: { mode: 'try' },
    description: 'serve static files',
    cache: {
      expiresIn: 30 * 24 * 60 * 60 * 1000,
    },
  },
})

Routes.push({
  method: 'GET',
  path: '/',
  handler: (req, reply) => reply.view('index'),
  config: {
    auth: false,
    description: 'This leads to homepage',
    tags : ['template']
  }
})

Routes.push({
  method: 'GET',
  path: '/{param*}',
  handler: (req, reply) => reply.redirect('/error'),
  config: {
    auth: false,
    description: 'This redirects to /error page',
    tags : ['template']
  }
})

Routes.push({
  method: 'GET',
  path: '/error',
  handler: (req, reply) => {
    reply.view('error', {Error: 'statusCode: 400, Not Found!'})
  },
  config: {
    auth: false,
    description: 'This leads to errorpage',
    tags : ['template']
  }
})

Routes.push({
  method: 'GET',
  path: '/start/{partnerHash}',
  handler: Handlers.start,
  config: {
    auth: { mode: 'try' },
    description: 'serve start/id page (data from service-partner)',
    tags : ['template']
  }
})

Routes.push({
  method: 'GET',
  path: '/start/{partnerHash}/agreement',
  handler: Handlers.agreement,
  config: {
    auth: false,
    description: 'serve agreement page to submit',
    tags : ['template']
  }
})


Routes.push({
  method: 'POST',
  path: '/submit/{partnerHash}',
  handler: Handlers.submit,
  config: {
    auth: 'session',
    description: 'submit agreement',
    tags : ['template']
  }
})

Routes.push({
  method: 'GET',
  path: '/start/{partnerHash}/thankyou',
  handler: Handlers.thankyou,
  config: {
    auth: 'session',
    description: 'serve thankyou',
    tags : ['template']
  }
})

Routes.push({
  method: 'GET',
  path: '/legal/{filename*}',
  handler: (req, reply) => reply.view(req.params.filename),
  config: {
    auth: false,
    description: 'This leads to /legal/{filename*}',
    tags : ['template']
  }
})


Routes.push({
  method: 'GET',
  path: '/health',
  config: {
    auth: false,
    description: 'Health Check',
    tags: ['api','lsq','Health'],
    handler: (req, reply) => reply(tooBusy.lag()+"")
  }
})
