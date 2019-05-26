import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';
import Resumen from './Resumen';
import Resultado from './Resultado';
class App extends Component { 

  //definimos los datos que tendra el state
  state = {
    resultado: '',
    datos: {}
  }

 
  cotizarSeguro = (datos) => {
     console.log("Componente principal App");
     console.log(datos);

     const {marca, year, plan} = datos;

     //precio base de donde partimos
     let resultado = 2000;

     //usamos helper.js para calcular valor del seguro del auto

     //por cada año de antiguedad resta 3% del precio del seguro base
     const descAnio = obtenerDiferenciaAnio(year);
     resultado -= ((descAnio * 3) * resultado) / 100;

     //calcula por la marca seleccionada los diferentes %
     resultado = calcularMarca(marca) * resultado;

     //calcula el incremento por plan
     let incrementoPlan = obtenerPlan(plan);
     resultado = incrementoPlan * resultado;

     //corta los decimales, solo deja 2
     resultado = parseFloat(resultado).toFixed(2);

     //resultado es el costo total del seguro del auto que se visulizara en otro componente

     const datosAuto = {marca, plan, year};
      

     //seteamos el state
     this.setState({
       resultado: resultado,
       datos: datosAuto
     });
  }
  
  render() {
    return (
      <div className="contenedor">
          <Header 
            titulo = "Cotizador de seguro de Auto"
          />

          <div className="contenedor-formulario">
            <Formulario
              cotizarSeguro = {this.cotizarSeguro} //paso el metodo cortizarSeguro al componente hijo a traves de props
            />

            <Resumen
              datos = {this.state.datos}
             
            />

            <Resultado
             resultado = {this.state.resultado}
            />
          </div>

      </div>
    );
  }
}

export default App;
