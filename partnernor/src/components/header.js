import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import Logo from './logo' // eslint-disable-line no-unused-vars
import Progress from './progress-loader' // eslint-disable-line no-unused-vars

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <Progress />
        { window.location.pathname !== '/' && <Logo /> }
      </header>
    )
  }
}
