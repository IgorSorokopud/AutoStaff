import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Router, Route, hashHistory } from 'react-router';

import App from './App';
import './index.css';
import './favicon/css/font-awesome.css';
import reducer from './reducers';
import More from './pages/More'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/more" component={More} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
