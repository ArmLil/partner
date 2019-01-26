import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom' // eslint-disable-line no-unused-vars
import {

    BrowserRouter as Router, // eslint-disable-line no-unused-vars
    Route, // eslint-disable-line no-unused-vars
    Switch, // eslint-disable-line no-unused-vars
    Link, // eslint-disable-line no-unused-vars
    Redirect, // eslint-disable-line no-unused-vars
    withRouter, // eslint-disable-line no-unused-vars
  } from 'react-router-dom' // eslint-disable-line no-unused-vars
import App from './app'
import Landing from './containers/landing'
import Start from './containers/partner-start'
import Agreement from './containers/agreement'
import ThankYou from './containers/partner-complete'
import Tos from './containers/tos'
import Privacy from './containers/privacy'
import Copyright from './containers/copyright'
import NotFound from './containers/notfound'

const route = (
  <Router>
    <App>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/start/:invitationCode' component={Start}/>
        <Route exact path='/start/:invitationCode/thankyou' component={ThankYou}/>
        <Route exact path='/start/:invitationCode/agreement' component={Agreement}/>
        <Route exact path='/legal/tos' component={Tos}/>
        <Route exact path='/legal/privacy' component={Privacy}/>
        <Route exact path='/legal/copyright' component={Copyright}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </ Router>
)
ReactDOM.render(route,
  document.getElementById('haystack')
)
