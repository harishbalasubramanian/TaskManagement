import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {store} from './redux/store';
import { Provider } from 'react-redux';
import './index.css'
// Creates the root element that renders App
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
