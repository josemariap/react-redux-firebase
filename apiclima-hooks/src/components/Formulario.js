import React, { useState } from 'react';

const Formulario = ( { datosConsulta } ) => {
    //DEFINICION DE HOOKS
    const [busqueda, guardarBusqueda] = useState({
        pais: '',
        ciudad: ''
    })

    const handleChange = e => {
       //seria como el setState pero con HOOKS
       guardarBusqueda({
          ...busqueda,
          [e.target.name] : e.target.value
       })
       console.log(busqueda)
    }

    const consultarClima = e => {
        e.preventDefault();
        datosConsulta(busqueda);//pasamos la busqueda al componente principal
    }

    return (
        <form onSubmit={consultarClima}>
            <div className="input-field col s12">
                <input type="text" name="ciudad" id="ciudad" onChange={handleChange}/>
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Seleciona un país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Ver Clima"/>
            </div>
        </form>
      );
}
 
export default Formulario;