import React from 'react';
import Evento from './Evento';

const Eventos = (props) => {
    const eventosIndex = Object.keys(props.eventos) //del array de eventos me saca el indice de cada eventos y lo guarda en el array eventosId

    return ( 
        <div className="list-group">
            {eventosIndex.map(index => (
               <Evento 
                key = {index}
                info = {props.eventos[index]}
               />
            ))}
        </div>
     );
}
 
export default Eventos;