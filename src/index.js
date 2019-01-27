import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Details from './views/Details';
import Home from './views/Home'
import{ Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>    
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/details' component={Details} />
    </Route>
  </Router>
  ,
  document.getElementById('root'));

serviceWorker.unregister();
