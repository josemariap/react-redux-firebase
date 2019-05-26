import React, { Component } from 'react';
import Imagen from './Imagen';
import Navegacion from './Navegacion';

class Resultado extends Component {

    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;
        if(imagenes.length === 0) return null;

        return(
            <React.Fragment>
                <div id="resultado" className="col-12 p-5 row">
                    {this.props.imagenes.map(imagen => (
                        <Imagen
                          key = {imagen.id}
                          imagen = {imagen}
                        />
                    ))}
                </div>
                <Navegacion
                   paginaSiguiente = {this.props.paginaSiguiente}
                   paginaAnterior = {this.props.paginaAnterior}
                />
            </React.Fragment>
        )
    }
     
    render() { 
        return (
            <React.Fragment>
                { this.mostrarImagenes()}
            </React.Fragment>
          );
    }
}
 
export default Resultado;