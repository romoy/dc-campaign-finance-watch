import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage.jsx';

require('./styles/main.css');
require('./styles/reactdaypicker.css');
require('./styles/fixed-data-table.min.css');

ReactDOM.render(<LandingPage/>, document.getElementById('app'));
