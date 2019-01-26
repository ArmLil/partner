import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router' // eslint-disable-line no-unused-vars
import authInvStore from '../stores/authSource' // eslint-disable-line no-unused-vars

export default class PartnerStart extends Component {
  constructor(props) {
    super(props)
    authInvStore.invitationCall(this.props.params.invitationCode)
    this.eventTable = {}
    this.state = {
      invitation: {},
    }
  }

  componentDidMount() {
    this.eventTable.invitationResults = this.onInvitationResults.bind(this)
    authInvStore.on('invitationResults', this.eventTable.invitationResults)
  }

  componentWillUnmount() {
    authInvStore.removeListener('invitationResults', this.eventTable.invitationResults)
  }

  onInvitationResults() {
    this.setState({
      invitation: authInvStore.state.invitation,
    })
  }

  render() {
    return (
      <section>
        <div className="account-popup terms">
          <div className="partner-intro">
            <h4>Please confirm that you are the person listed below,
            { ' ' }and that all corresponding information is correct:</h4>
          </div>
          <div className="partner">
            <div className="field">
              <i className="hay hay-person"></i>
              <h2 className="field">Name</h2>
            </div>
            <div className="partner-data">
              <label className="partner-data">
                {this.state.invitation.firstName} {this.state.invitation.lastName}
              </label>
            </div>
          </div>
          <div className="partner">
            <div className="field">
              <i className="hay hay-clipboard"></i>
              <h2 className="field">Company</h2>
            </div>
            <div className="partner-data">
              <label className="partner-data" > {this.state.invitation.name} </label>
            </div>
          </div>
          <div className="partner">
            <div className="field">
              <i className="hay hay-clipboard"></i>
              <h2 className="field">Position</h2>
            </div>
            <div className="partner-data">
              <label className="partner-data" > {this.state.invitation.position} </label>
            </div>
          </div>
          <div className="partner">
            <div className="field">
              <i className="hay hay-contact"></i>
              <h2 className="field">Email</h2>
            </div>
            <div className="partner-data">
              <label className="partner-data" > {this.state.invitation.email} </label>
            </div>
          </div>
          <Link className="btn cta" to={`/start/${this.state.invitation.hash}/agreement`}>
            Continue
          </Link>
        </div>
      </section>
    )
  }
}
