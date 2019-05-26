import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ESTA PROYECTO AGREGA sweetalert2 PARA LAS ALERTAS: npm install --save-dev sweetalert2
//https://sweetalert2.github.io/

ReactDOM.render(<App />, document.getElementById('root'));

//Usa api jsonPlaceholder
serviceWorker.unregister();
