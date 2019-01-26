'use strict'
const Request = require('request-promise')
const LSQ = require('lsq');

const Handlers = {}
module.exports = Handlers

const getRepresentative = (hash) => {
  return LSQ.services.get('service-partner')
    .then((service) => Request({
      uri: `http://${service}/api/representative/${hash}`,
      method: 'GET',
      json: true
    }))
}

Handlers.start = (req, reply) => {
  const { partnerHash } = req.params
  //console.log('req.auth', req.auth)
  return getRepresentative(partnerHash)
    .then(partner => {
      if(req.auth.isAuthenticated && partner.status) {
        return Object.assign({}, partner, {status: 'loggedin'})
      }
      return Object.assign({}, partner)
    })
    .then(data => {
      if(data.error) {
        return reply.redirect('/error')
      }
      return reply.view('start', data)
    })
    .catch((err) => {
      console.error('Error in start chain', err.error)
      return reply.redirect('/error')
    })
}

//serve agreement page
Handlers.agreement = (req, reply) => {
  const { partnerHash } = req.params
  return getRepresentative(partnerHash)
    .then((data) => {
      if(data.error) return reply.redirect('/error')
      reply.view('agreement', data)
    })
    .catch((err) => {
      console.error('Error in agreement chain', err.error)
        return reply.redirect('/error')
    })
}

//submit representative as a partner
Handlers.submit = (req, reply) => {
  const { partnerHash } = req.params
  return LSQ.services.get('service-partner')
    .then((service) => Request({
      uri: `http://${service}/api/representative/${partnerHash}`,
      method: 'PUT',
      body: req.payload,
      json: true
    }))
    .then(reply.redirect(`/start/${partnerHash}/thankyou`))
    .catch((err) => reply.redirect('/error'))

}

Handlers.thankyou = (req, reply) => {
  const { partnerHash } = req.params
  return LSQ.services.get('service-partner')
    .then((service) => Request({
      uri: `http://${service}/api/representative/${partnerHash}`,
      method: 'GET',
      json: true
    }))
    .then((data) => {
      if(data.error) {
        return reply.redirect('/error')
      }
      return reply.view('thankyou', data)
    })
    .catch((err) => reply.redirect('/error'))
}
