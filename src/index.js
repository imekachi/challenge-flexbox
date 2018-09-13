import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const UpdatedApp = require('./App').default
    ReactDOM.render(<UpdatedApp />, rootElement)
  })
}
