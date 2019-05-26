import React from 'react';
import ReactDOM from 'react-dom';
import Aplicacion from './componentes/Aplicacion'
import './css/index.css';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(<Aplicacion />, document.getElementById('root'));
serviceWorker.unregister();
