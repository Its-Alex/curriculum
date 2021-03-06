import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import * as Sentry from '@sentry/browser'
import posthog from 'posthog-js'

import * as serviceWorker from './ServiceWorker'
import GlobalTheme from './components/Theme'
import Home from './pages/Home'
import './i18n/I18n'

if (
  process.env.REACT_APP_CURRICULUM_POSTHOG_TOKEN &&
  process.env.REACT_APP_CURRICULUM_POSTHOG_URL
) {
  console.info('Posthog enable')
  posthog.init(process.env.REACT_APP_CURRICULUM_POSTHOG_TOKEN, { api_host: process.env.REACT_APP_CURRICULUM_POSTHOG_URL })
}
if (process.env.REACT_APP_CURRICULUM_SENTRY_DSN) {
  console.info('Sentry enable')
  Sentry.init({ dsn: process.env.REACT_APP_CURRICULUM_SENTRY_DSN })
}
ReactGA.initialize('UA-152708823-1')
ReactGA.pageview('/')

ReactDOM.render(
  <GlobalTheme>
    <Home />
  </GlobalTheme>
  , document.getElementById('root'))

serviceWorker.unregister()
