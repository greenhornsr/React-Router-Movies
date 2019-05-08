import React from 'react';
import ReactDOM from 'react-dom';

// importing BrowserRouter from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import App from './App';
// below here, I Wrapped my App with Router to enable Route functionality for the whole app
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
