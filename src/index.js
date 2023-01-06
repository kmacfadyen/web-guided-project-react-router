import React from 'react'
import { render } from 'react-dom'

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'

// 👉 STEP 1 - Import React Router's Router
import { BrowserRouter as Router } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'

render(
  // Wrap the <App /> in a provider
  <Router>
  <App />
  </Router>
  , document.querySelector('#root')
)


/*
location -> all data about where you are
history -> all data about where you were and where you're going
match -> all data about current location with regards to query params, etc
*/