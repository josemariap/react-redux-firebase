import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import FormularioGasto from './Formulario';
import Listado from './Listado';
import {validarPresupuesto} from'../helper';
import ControlPresupuesto from './ControlPresupuestp';
import Restante from './Restante';

class App extends Component { 
  
  state = {
    presupuesto: "",
    restante: "",
    gastos: {},
  }


  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = ()=> {
    let presupuesto = prompt("Cual es e presupuesto");

    let resultado = validarPresupuesto(presupuesto);

    if(resultado){
        this.setState({
          presupuesto:presupuesto,
          restante:presupuesto
        })
    }else{
       this.obtenerPresupuesto();
    }
  }
   

  agregarGasto = (gasto) => {
    
    const gastos = {...this.state.gastos};//se crea una copia del arreglo de gastos
    
    gastos[`gasto${Date.now()}`] = gasto;    //usa el timestamp como id del gasto

    this.restarPresupuesto(gasto.cantidadGasto); //restamos la cantidad del gasto del presupuesto

    this.setState(
      {
        gastos: gastos,
      }
    )
  
  }

  restarPresupuesto = (cantidad ) => {
    let restar = Number(cantidad);
    let restante = this.state.restante;
    restante -= restar;
    //lo resto y lo paso de nuevo a string
    restante = String(Restante);

    this.setState({
      restante: restante
    })
  }

  render() {
    return (
      <div className="App container">
         
           <Header 
             titulo = 'Gasto Semanal'
           />
           <div className="contenido-principal contenido">
             <div className="row">
                 <div className="one-half column">
                    <FormularioGasto
                     agregarGasto ={this.agregarGasto}
                    />
                 </div>
                 <div className="one-half column">
                    <Listado
                      gastos={this.state.gastos}
                    />
                    <ControlPresupuesto
                      presupuesto = {this.state.presupuesto} 
                      restante = {this.state.restante}
                    />
                 </div>
             </div>
           </div>
         
      </div>
    );
  }
}



export default App;
