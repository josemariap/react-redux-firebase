import React, { Component } from 'react';
import PropTypes from 'prop-types'    //EMPEZAMOS A USAR Prop-Types

class FormularioGasto extends Component{

    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    crearGasto = (e) => {
        e.preventDefault();
        const gasto = {
            nombreGasto: this.nombreGasto.current.value,
            cantidadGasto: this.cantidadGasto.current.value
        }

        console.log(gasto);
        this.props.agregarGasto(gasto);
        e.currentTarget.reset(); //resetear el formulario

    }
 

    render(){
        return(
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>

                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.nombreGasto} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
                 </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
             </form>
        );
    }
}

//uso de proptypes para validar los datos que puede recibir el componente en sus props
FormularioGasto.propTypes = {
    agregarGasto: PropTypes.func.isRequired   //este componenete se valida que reciba una funcion por props y es obligatoria
}

export default FormularioGasto;