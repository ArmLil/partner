import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router' // eslint-disable-line no-unused-vars

export default class Logo extends Component {
  render() {
    return (<Link className='brand' to="/" />)
  }
}
