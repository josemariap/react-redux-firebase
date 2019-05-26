import React, { Component } from 'react';
import Equipos from './componentes/Equipos';
import LaLigaProvider from './componentes/LaLiga';

//USAREMOS CONTEXT API para pasar la informacion entre componentes sin pasar por todos los niveles de componentes
//LaLiga.js tiene el component LaLigaProvider que será nuestro provider con la info para el uso de CONTEXT
//El state del componente principal app.js lo pasamos al provider
//El provider hace nuestra info disponible para los consumer

class App extends Component {
//Al usar context api, movemos el state al provider
  render() {
    return (
      <div className="container">
        <LaLigaProvider>

            <Equipos />
            
        </LaLigaProvider>
      </div>
    );
  }
}

export default App;
