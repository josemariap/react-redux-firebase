import React, { Component } from 'react';

                   /* PROVIDER */
//Este componente será nuestro provider de info si usamos contenxt api
//Podemos tener varios provider con state, depende la aplicacion

//Tare: Creamos el CONTEXT antes del class component
const laLigaContext = React.createContext();
export { laLigaContext };//exportamos el context para que lo use el consumer el el componente que queremos la info

class LaLigaProvider extends Component {
    state = {
        equipos:[
          {
            nombre: "Real Madrid",
            titulos: 35
          },
          {
            nombre: "Barcelona",
            titulos: 28
          },
          {
            nombre: "Milan",
            titulos: 15
          }
        ]
      }
    render() { 
        return ( 
             <laLigaContext.Provider value={{
                 state: this.state.equipos,
                 esCampeon: (id) => {
                  //agregamos una funcion al provide para que la use el consumer
                  //el al id es el index del array
                  const equipos = [...this.state.equipos] 
                  equipos[id].titulos ++;
                  this.setState({
                    equipos: equipos  //actualizo el state que se carga en el provide para el consumer
                  })
                 }
                 }} >

                   {this.props.children}

             </laLigaContext.Provider>
         );
    }
}
 
export default LaLigaProvider;