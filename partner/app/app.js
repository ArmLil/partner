import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import Header from './components/header' // eslint-disable-line no-unused-vars
import Footer from './components/footer' // eslint-disable-line no-unused-vars

export default class App extends Component {
  render() {
    return (
      <article>
				<Header />
        { this.props.children }
				<Footer />
			</article>
		)
  }
}
