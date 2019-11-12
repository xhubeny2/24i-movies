import React from 'react';
import ReactDOM from 'react-dom';

// import CSS styles - author: http://w3layouts.com, license: Creative Commons Attribution 3.0 Unported
import "./web/css/bootstrap.css";
import "./web/css/style.css";
import "./web/css/single.css"
import "./web/css/medile.css"
import "./web/css/font-awesome.min.css"

import * as serviceWorker from './serviceWorker';

import App from './App';

// render react virtual DOM
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
