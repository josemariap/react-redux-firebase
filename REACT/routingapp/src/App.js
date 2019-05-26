import React, { Component } from 'react';
import Header from './componentes/Header';//NO lo porque esta en el component Router
import Router from './componentes/Router';

//Usamos react router:  npm install --save-dev react-router-dom
//Creamos Router.js para definir las rutas


class App extends Component {
  render() {
    return (
         <React.Fragment>
           <Router />
         </React.Fragment>
    );
  }
}

export default App;
