import React from 'react';
import ReactDOM from 'react-dom';
import Ruotes from './components/Routes.jsx';

require('./styles/main.css');
require('./styles/reactdaypicker.css');
require('./styles/fixed-data-table.min.css');

ReactDOM.render(<Ruotes/>, document.getElementById('app'));
