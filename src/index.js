import 'babel-polyfill';
import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import 'todomvc-app-css/index.css';

const store = configureStore();

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
