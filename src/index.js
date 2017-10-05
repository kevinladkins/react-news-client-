import styles from './styles/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

document.querySelector('div').innerHTML = "stand by"

ReactDOM.render(
  <App />,
  document.querySelector('.root')
)
