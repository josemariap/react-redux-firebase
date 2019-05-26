import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCitas from './componentes/AgregarCitas';
import ListaCitas from './componentes/ListaCitas';
 
class App extends Component {
 
  state = {
    citas:[]
  }

  componentDidMount() {    //es lo primero que se ejecuta en el componente/ carga el state con lo del localStorage
    const citasLocalStorage = localStorage.getItem('citas');
    if(citasLocalStorage){
      this.setState({
        citas: JSON.parse(citasLocalStorage)  // parse vuelve el el string nuevamente a un arreglo u objeto
       }
      )
    }
  } 

  componentDidUpdate(){  //se ejecuta cuando cambia algo en el state del componente
    localStorage.setItem(
       'citas', 
       JSON.stringify(this.state.citas)//se usa stringify  xq locaStorage solo almancena cadanas de texto
    )
  }

  /* componentWillMount() {  se ejecuta antes que el componente
      console.log("WillMount")
  } */

  /* componentWillUnmount() {  
      console.log("WillinMount")
  } */ 
   
  crearCita = (nuevaCita) => {    
      const citas = [...this.state.citas, nuevaCita];  //hacemos un copia del state, arreglo citas y agrega la nueva citas tambien, todo en un paso
      this.setState({
        citas: citas
       }
      );
  }

  borrarCita = (id) => {
     const citasActuales = [...this.state.citas];  //hacemos copia del state
     const citas = citasActuales.filter(cita => cita.id !== id); //filter es un iterador, mientras sea true copia la cita al arreglo
     //filter es buena opcion para quitar objetos de un arreglo 

     //actulizo el state con una cita eliminada
     this.setState({
       citas: citas
      }
     )
  }

  render() {
    return (
      <div className="container">
           <Header
              titulo = "Administrador de Pacientes de Veterinaria"
           />
           
           <div className="row">
              <div className="col-md-6">
                  <AgregarCitas
                    crearCita = {this.crearCita}
                  />
              </div>
              <div className="col-md-6"> 
                  <ListaCitas 
                    citas = {this.state.citas}
                    borrarCita = {this.borrarCita}
                  />
              </div>
           </div>
      </div>
    );
  }
}

export default App;
