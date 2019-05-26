import React, { Component } from 'react';
import {makeMainRoutes} from './componentes/routes'; //Es el metedo que retorna toda el ruteo con autentificacion

const router = makeMainRoutes();//lo que retorna el metodo se guarda en la const router

class App extends Component {
  render() {
    return (
         <React.Fragment>
           {router}
         </React.Fragment>
    );
  }
}

export default App;
