import React, { Component } from 'react';
import Equipo from './Equipo';
//El componente Equipo solo se llamará una vez
class Equipos extends Component {
    //los datos solo parasaran por el componente Equipos pero se dentendran donde esta el consumer que es Equipo
    render() { 
        return ( 
           <Equipo /> 
         );
    }
}
 
export default Equipos;