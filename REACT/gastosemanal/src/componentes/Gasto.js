import React, {Component} from 'react'
import PropTypes from 'prop-types'  

export default class Gasto extends Component{


    render(){
        const {nombreGasto, cantidadGasto} = this.props.gasto;
        return(
            <li className="gastos">
               <p>
                   {nombreGasto}
                   <span className="gasto">$ {cantidadGasto} </span>
               </p>
            </li>
        );
    }
}

Gasto.propType = {
    gasto: PropTypes.object.isRequired
}