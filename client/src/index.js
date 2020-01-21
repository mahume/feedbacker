import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/index.jsx';
import Store from "./context/Store";
import * as serviceWorker from './util/serviceWorker';

ReactDOM.render(
  <Store>
    <App /> 
  </Store>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
