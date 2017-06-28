require('babel-polyfill');

import React from 'react';
import ReactDOM  from 'react-dom';

//import Person from './components/person';
import PersonList from './components/person-list';



document.addEventListener('DOMContentLoaded', () =>
    //ReactDOM.render(<Person />, document.getElementById('app'))
    ReactDOM.render(<PersonList />, document.getElementById('app'))
);

