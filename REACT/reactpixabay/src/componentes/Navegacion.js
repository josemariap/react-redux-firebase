import React from 'react';

const Navegacion = (props) => {
    return ( 
        <div className="py-5">
            <button type="button"  onClick={props.paginaAnterior} className="btn btn-info mr-1">&larr; Anterior</button>
            <button type="button"  onClick={props.paginaSiguiente} className="btn btn-info">Siguiente &rarr;</button>
        </div>
     );
}
 
export default Navegacion;