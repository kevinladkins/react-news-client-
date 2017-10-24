import styles from './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './reducers';

document.querySelector('div').innerHTML = "stand by"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.root')
)
