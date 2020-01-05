import React, { useState } from 'react' //useState son HOOKS
import Error from './Error';

// sfc con hooks!!
const Buscador = ( { guardarBusqueda }) => {
    const [terminoBusqueda, guardarTerminoBusqueda] = useState(''); //hooks (remplaza el state y setState del class component)
    const [error, guardarError] = useState('false');

    const buscarImagen = e => {
        e.preventDefault();
        //validacion del state del terminoBusqueda
        if(terminoBusqueda === '') {
            guardarError(true);
            return;//salimos de la ejecucion
        }
        guardarError(false);
        guardarBusqueda(terminoBusqueda) //seteo el state del componenete padre y el valor se guarda en el state del padre
    }
    return (
       <form onSubmit={buscarImagen}>
           <div className="row">
               <div className="form-group col-md-8">
                   <input  type="text" placeholder="Busca una imagen, ejemplo: Fútbol o Café" className="form-control form-control-lg"
                     onChange={e => {guardarTerminoBusqueda(e.target.value)}}
                   />
               </div>

               <div className="form-group col-md-4">
                   <input  type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
               </div>
           </div>

           { (error === true) ? <Error mensaje='Agrega un término de Búsqueda' />
               : null }
       </form>
    )
}

export default Buscador;