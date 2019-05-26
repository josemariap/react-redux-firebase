import React from 'react';

const Evento = (props) => {
    const {name, url, description} = props.info
    return ( 
      <a href={url} target="_/blank" className="list-group-item active text-light mb-1">
        <h3 className="mb-3">{name.text}</h3>
        <p className="mb-1">{description.text}</p>
      </a>
 
     );
}
 
export default Evento;