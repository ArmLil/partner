import React from 'react' // eslint-disable-line no-unused-vars
import { render } from 'react-dom' // eslint-disable-line no-unused-vars
import {
    Router, // eslint-disable-line no-unused-vars
    browserHistory, // eslint-disable-line no-unused-vars
    Route, // eslint-disable-line no-unused-vars
    IndexRoute, // eslint-disable-line no-unused-vars
    IndexRedirect, // eslint-disable-line no-unused-vars
  } from 'react-router' // eslint-disable-line no-unused-vars
import App from './app'

import Landing from './containers/landing'
import Start from './containers/partner-start'
import Agreement from './containers/agreement'
import ThankYou from './containers/partner-complete'

import Tos from './containers/tos'
import Privacy from './containers/privacy'
import Copyright from './containers/copyright'
import NotFound from './containers/notfound'

const routes = (
	<Route component={App} path="/">
		<IndexRoute component={Landing} />

    <Route path='start'>
      <IndexRedirect to='/' />
      <Route path=":invitationCode">
        <IndexRoute component={Start} />
        <Route path="agreement" component={Agreement} />
        <Route path="thankyou" component={ThankYou} />
      </Route>
    </Route>

    <Route path="legal">
      <IndexRedirect to="tos" />
      <Route path="tos" component={Tos} />
      <Route path="privacy" component={Privacy} />
      <Route path="copyright" component={Copyright} />
    </Route>

		<Route path="*" component={NotFound} />
	</Route>
)

render(
	<Router history={browserHistory} routes={routes} />,
  document.getElementById('haystack')
)
