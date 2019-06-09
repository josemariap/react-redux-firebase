import React from 'react';

const Clima = ({ resultado }) => {

    const { name, main } = resultado;
    if(!name) return null;//sale si no hay name

    const Kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El Clima de {name} es:</h2>
                <p className="temperatura"> 
                   { parseInt(main.temp - Kelvin, 10) } &#x2103;
                </p>
                <p>Temperatura Máxima: { parseInt(main.temp_max - Kelvin, 10) } &#x2103;</p>
                <p>Temperatura Mínima { parseInt(main.temp_min - Kelvin, 10) } &#x2103;</p>
            </div>
        </div>
     );
}
 
export default Clima;