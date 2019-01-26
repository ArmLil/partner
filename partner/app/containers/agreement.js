import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { browserHistory, Link } from 'react-router' // eslint-disable-line no-unused-vars
import HtmlToReact from 'html-to-react' // eslint-disable-line no-unused-vars
import Progress from '../components/progress-loader' // eslint-disable-line no-unused-vars
import authInvStore from '../stores/authSource' // eslint-disable-line no-unused-vars

const htmlToReactParser = new HtmlToReact.Parser(React)

export default class Agreement extends Component {
  constructor(props) {
    super(props)
    authInvStore.invitationCall(this.props.params.invitationCode)
    this.eventTable = { }
    this.state = {
      isAgree: false,
      message: '',
      invitation: {},
    }
  }

  componentDidMount() {
    this.eventTable.userTermsAccepted = this.onStoreChange.bind(this)
    authInvStore.on('userTermsAccepted', this.eventTable.userTermsAccepted)

    this.eventTable.invitationResults = this.onInvitationResults.bind(this)
    authInvStore.on('invitationResults', this.eventTable.invitationResults)
  }

  componentWillUnmount() {
    authInvStore.removeListener('userTermsAccepted', this.eventTable.userTermsAccepted)
    authInvStore.removeListener('invitationResults', this.eventTable.invitationResults)
  }

  onInvitationResults() {
    this.setState({
      invitation: authInvStore.state.invitation,
    })
  }

  onStoreChange() {
    Progress.hide()
    this.setState(this.state,
      function () {
        browserHistory.push(`/start/${this.props.params.invitationCode}/thankyou`)
      })
  }

  onInputChange(e) {
    this.setState({
      isAgree: e.target.checked,
      message: '',
    })
  }

  onSubmitForm() {
    Progress.show()
    if (this.state.isAgree) {
      authInvStore.emit('action', {
        action: 'accept_term',
        hash: authInvStore.state.invitation.hash,
      })
    } else {
      Progress.hide()
      this.state.message = 'you must to check !!!'
    }
    this.setState(this.state)
  }

  render() {
    return (
      <section>
        <div className="account-popup terms">
          <div className="partner-intro">
            <h4>Please review the document below. It outlines the terms of our agreement,
            { ' ' }including our affiliate payment structure.</h4>
          </div>

          <div className="terms">
            <div className="contents">
              {
                authInvStore.state.invitation.contract ?
                htmlToReactParser.parse(authInvStore.state.invitation.contract) :
                ''
              }
            </div>
          </div>
          <div className="partner-confirm">
            <h6 className="top">
              <input
                onChange={this.onInputChange.bind(this)}
                type="checkbox"
              /> By checking this box, I confirm that
              <strong> I, { authInvStore.state.invitation.firstName }
                { ' ' }{ authInvStore.state.invitation.lastName },
                { ' ' }{ authInvStore.state.invitation.position } of
                { ' ' }{ authInvStore.state.invitation.name },
              </strong>
              { ' ' } have read and fully understand Haystack.im’s Source Partner Addendum.
            </h6>
            <h6 className="bottom">
              As a representative of { authInvStore.state.invitation.name },
              { ' ' } I agree to the stated terms on behalf of my company. I have also reviewed the
              <Link to="/legal/tos" target="_blank">
                <strong> Terms of Service</strong>
              </Link>,
              <Link to="/legal/privacy" target="_blank"> <strong>Privacy Policy</strong></Link>, and
              <Link to="/legal/copyright" target="_blank">
                <strong> Copyright Policy</strong>
              </Link> that apply to all Haystack.im users.
            </h6>
            <h6 className='error'>{this.state.message}</h6>
            <button className="btn cta" onClick={this.onSubmitForm.bind(this)}>Submit</button>
            <h4>Questions or concerns?</h4>
            <h4>Call Andrew at +1 917 402 0363 or <br/>
              send him a message at andrew@haystack.im. </h4>
          </div>
        </div>
      </section>
    )
  }
}
