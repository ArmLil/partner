import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import Logo from '../components/logo' // eslint-disable-line no-unused-vars

export default class LandingContainer extends Component {
  render() {
    return (
      <section
        className='landing-hero'
        style={{ height: `${window.innerHeight - 66}px` }}
      >
        <Logo />
      </section>
    )
  }
}
