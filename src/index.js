import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux'
// import registerServiceWorker from './registerServiceWorker'
// import configureStore from './configureStore'
import * as serviceWorker from './serviceWorker';

// const store = configureStore();


ReactDOM.render(
   
<App />

, document.getElementById('root'));

serviceWorker.unregister();
// registerServiceWorker()
