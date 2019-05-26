import React, {Component} from 'react';
import {primeraMayuscula} from '../helper';

class Resumen extends Component{

    mostrarResumen = () => {
        const {marca, year, plan} = this.props.datos;

        if(!marca || !plan || !year) return null;

        return(
            <div className="resumen">
              <h2>Resumen de cotizacion</h2>
              <li>Marca del auto: { primeraMayuscula(marca) }</li>
              <li>Año del auto: { year }</li>
              <li>Plan selecionado: { primeraMayuscula(plan) }</li>
            </div>
        )
    }


    render(){
    
        
        return(
            <div>
                {this.mostrarResumen()}
            </div>

        )
    }
}

export default Resumen;