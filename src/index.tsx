import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TekledApp from './Tekledelse/TekledApp';
import * as serviceWorker from './serviceWorker';
import MenuOverlay from './ManuOverlay/MenuOverlay';

ReactDOM.render(
  <React.StrictMode>
    <MenuOverlay >
      <TekledApp/>
    </MenuOverlay>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
