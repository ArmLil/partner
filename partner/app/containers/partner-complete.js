import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { PropTypes } from 'react-router' // eslint-disable-line no-unused-vars
import authInvStore from '../stores/authSource' // eslint-disable-line no-unused-vars

export default class SignupComplete extends Component {
  componentWillMount() {
    if (!Object.keys(authInvStore.state.invitation).length) {
      this.context.router.replace('/')
    }
  }
  render() {
    return (
			<section>
				<div className='account-popup'>
					<h2>Thank you {authInvStore.state.invitation.firstName}.</h2>
					<h3>A confirmation email has been sent to {authInvStore.state.invitation.email}.</h3>
				</div>
			</section>
		)
  }
}
SignupComplete.contextTypes = { router: React.PropTypes.object }
