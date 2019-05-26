import React,{Component} from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types'  

export default class Listado extends Component {


    render() {
        return (

            <div className="gastos-realizados">
                 <h2>Listado</h2>
                 {Object.keys( this.props.gastos ).map(Key => (
                       <Gasto 
                          key={Key}
                          gasto={this.props.gastos[Key]}
                       />
                 ))}
            </div>

        );
    }
}

Listado.propType = {
    gastos: PropTypes.object.isRequired
} 
