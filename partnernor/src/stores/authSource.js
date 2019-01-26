import EventEmitter from 'events'
import request from 'request'

const HOST = window.location.origin

class AuthSource extends EventEmitter {
  constructor() {
    super()
    this.on('action', this.onAction)
    this.state = {
      invitation: {},
    }
  }

  onAction(data) {
    const handlers = {
      accept_term: this.onAcceptTerms,
      new_partner_register: this.onNewPartnerRegister,
    }
    handlers[data.action].call(this, data)
  }

  onNewPartnerRegister(data) {
    this.state.invitation = Object.assign({}, data.userData)
    this.emit('newPartner')
  }
  onAcceptTerms(data) {
    const options = {
      url: `${HOST}/api/representative/${data.hash}`,
      method: 'PUT',
    }

    request(options, (error, response) => {
      if (!(!error && response.statusCode === 200)) {
        throw error
      }
      this.emit('userTermsAccepted')
    })
  }


  invitationCall(invitationCode) {
    const options = {
      url: `${HOST}/api/representative/${invitationCode}`,
      method: 'GET',
    }

    request(options, (error, response, body) => {
      if (!(!error && response.statusCode === 200)) {
        throw error
      }
      this.state.invitation = JSON.parse(body)
      Object.assign(this.state.invitation, { partnerInvitationCode: invitationCode })
      this.emit('invitationResults')
    })
  }
}

const authSource = new AuthSource()
export default authSource
