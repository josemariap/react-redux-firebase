import React from 'react';
import store from './store';
import { Provider } from 'react-redux'; //componente Provider que envuelve todos los componentes
import AgregarCita from './components/AgregarCita';
import ListadoCitas from './components/ListadoCitas';

//el store y el provider tienen que estar en el componente padre de todos los componentes y los demas componentes lo heredan
//le pasamos el store al componente Provider y este store queda disponoble para todos los componentes
function App() {
  return (
    <Provider store= {store}>
            <div className="container">
                <header>
                  <h1 className="text-center">Administrador de Pacientes de Veterinaria</h1>
                </header>

                <div className="row mt-3">

                  <div className="col-md-6">
                      <AgregarCita />
                  </div>
                  <div className="col-md-6">
                      <ListadoCitas />
                  </div>

                </div>
            </div>
    </Provider>
  );
}

export default App;
