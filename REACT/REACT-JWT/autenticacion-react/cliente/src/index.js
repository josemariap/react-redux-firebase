import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Recursos del proyecto: https://gist.github.com/juanpablogdl/c0ec8eb9bd31bce633d01f605211c80e

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
