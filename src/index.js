import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import './css/normalize.css'
import './css/utility.css'
import './css/index.css'

import App from './app/app.js'

ReactDOM.render(
    <Router>
        <Route path='/' component={App} />
    </Router>,
    document.getElementById('root')
);
