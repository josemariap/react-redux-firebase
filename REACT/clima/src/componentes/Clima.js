import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Clima extends Component {

    mostrarResultado = () => {
        const {name, weather, main} = this.props.resultado   //evaluamos que hayan datos para mostrar
        if(!name || !weather || !main) return null; //si no hay nada salimos y el metodo no retorna nada
           
        const kelvin = 273.15;
        const urlIcono = `http://openweathermap.org/img/w/${weather[0].icon}.png`;   //estos iconos se consultan en la api y vienen en el array weather en pos 0
        const alt =`clima de ${name}`;
        return (
           <div className="row">
               <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                  <div className="card-panel light-blue align-center">
                      <span className="white-text">
                         <h2>Resultado del clima de: {name}</h2>
                         <p className="temperatura"> 
                             Actual: { (main.temp - kelvin).toFixed(2) } &deg;C
                             <img src={urlIcono} alt= {alt}/>
                         </p>
                         <p>Max. {main.temp_max - kelvin} &deg;C</p>
                         <p>Min. {main.temp_min - kelvin} &deg;C</p>
                      </span>
                  </div>
               </div>
           </div>
             
        )
    }
 
    render() {
        return (
            <div className="container">
               { this.mostrarResultado() }
            </div>
        );
    }
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}