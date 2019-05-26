import React from 'react';
//aplicamos destructuring a las props y sacamos directamente el alumno que recibio por props
const FichaSuscripptor = ({ alumno }) => {
    return ( 
        <div className="card my-3">
           <h3 className="card-header bg-primary text-white">Datos Solicitante</h3>

           <div className="card-body">
              <p className="font-weight-bold">Nombre: {' '}
                 <span className="font-weight-normal">{alumno.nombre}</span>
              </p>
              <p className="font-weight-bold">Código: {' '}
                 <span className="font-weight-normal">{alumno.codigo}</span>
              </p>
              <p className="font-weight-bold">Carrera: {' '}
                 <span className="font-weight-normal">{alumno.carrera}</span>
              </p>
           </div>
        </div>
     );
}
 
export default FichaSuscripptor;