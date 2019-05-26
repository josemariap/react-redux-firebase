import React, { Component } from 'react';
import { laLigaContext } from './LaLiga';//Nos traemos el contexto que tiene la info

//Equipo es el componente que tiene el consumer, entonces a que se detendran los datos que viajan
//contetextValues dentro de la funcion de Consumer tiene toda la info que se paso del provider
                        /*  CONSUMER  */
class Equipo extends Component {


    render() { 
        return ( 
           <laLigaContext.Consumer>
               { (contextValues) => {
                  //  console.log(contextValues)  //El Consumer es donde se va a detener el paso de la info desde los niveles padres
                  return Object.keys(contextValues.state).map(idEquipo => {
                      return(
                          <li className="list-group-item d-flex justify-content-between align-item-center" key={idEquipo}>
                             <p>
                                 {contextValues.state[idEquipo].nombre}
                                 <span className="ml-4 badge badge-danger">
                                   {contextValues.state[idEquipo].titulos}
                                 </span>
                             </p>
                             <button className="btn btn-success" type="button" onClick={ () => {
                                 contextValues.esCampeon(idEquipo)
                             }}>
                                Es Campeon
                             </button>
                          </li>
                      )
                  })
           } }
           </laLigaContext.Consumer>
         );
    }
}
 
export default Equipo;