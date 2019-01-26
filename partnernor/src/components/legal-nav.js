import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars

export default class LegalNav extends Component {
  render() {
    return (
      <nav>
        <Link
          to="/legal/tos"
          className={this.props.isActive === 'tos' ? 'active' : ''}
        >
          Terms of Service
        </Link>
        <Link
          to="/legal/privacy"
          className={this.props.isActive === 'privacy' ? 'active' : ''}
        >
          Privacy Policy
        </Link>
        <Link
          to="/legal/copyright"
          className={this.props.isActive === 'copyright' ? 'active' : ''}
        >
          Copyright Policy
        </Link>
      </nav>
    )
  }
}
