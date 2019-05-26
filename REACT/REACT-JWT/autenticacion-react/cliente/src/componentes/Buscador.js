import React, { Component } from 'react';
import '../css/buscador.css';

class Buscador extends Component {
   
   leerDatos = (e) => {
     const termino = e.target.value;
     this.props.busqueda(termino);
   }

    render() { 
        return ( 
            <form className="buscador">
               <input type="text" placeholder="Search" onChange={this.leerDatos} />
            </form>
         );
    }
}
 
export default Buscador;