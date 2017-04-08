import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './App';
import './index.css';
import './favicon/css/font-awesome.css';
import reducer from './reducers';
import More from './pages/more/More';
import Manual from './pages/manual/Manual';
import Order from './pages/order/Order';
import Cabinet from './pages/cabinet/Cabinet';
import CabinetExecutor from './pages/cabinet/CabinetExecutor';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="/more/:id" component={More} />
      <Route path="/manual" component={Manual} />
      <Route path="/order" component={Order} />
      <Route path="/cabinet" component={Cabinet} />
      <Route path="/cabinetExecutor" component={CabinetExecutor} />

    </Router>
  </Provider>,
  document.getElementById('root')
);
