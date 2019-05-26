import React, {Component} from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

//CONNECT REDUX
import { connect } from 'react-redux'; //sirve para conectar el action con el componente para el dispatch y el state unico 
//importamos el action en nuestro component
import { obtenerCitas } from '../actions/citasActions'; //metodo que retorna el json con el type que será mepado a su propio reducer como parametro action

import store from '../store'; 
//subscribe: si se actualiza el state del store se ejecuta la arrow funtion del subscribe, el subscribe esta a la escucha de cambios del state
store.subscribe(() => {
  localStorage.setItem( 'citas', JSON.stringify(store.getState()) )//actualizo el localStorage con el nuevo state que se actualizo
})//el localStorage necesita los datos como String

class ListaCitas extends Component {

    componentDidMount(){
        this.props.obtenerCitas();
    }

    render(){
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus citas aquí';
        return(
           <div className="card mt-5">
               <div className="card-body">
                   <h2 className="card-title text-center"> {mensaje} </h2>
                   
                   <div className="lista-citas">
                      {Object.keys(this.props.citas).map(key => (
                         <Cita
                         key = {key}
                         cita = {this.props.citas[key]}
                         />
                      )
                      )}
                   </div>
               </div>
           </div>
        )
    }
}

ListaCitas.propType = {
    citas: PropTypes.array.isRequired,
    borrarCita: PropTypes.func.isRequired
}

// 1. - Map de redux state unico a props de este componente
// 2. - acciones para dispatch

//el parametro de la funcion state es el state unico del store y contiene todo de la app, accedo a citas que es nombre que le di a citasReducer dentro del
//combineReducers y accedo a citas que es el nombre del arreglo dentro del state que retorna el citasReducer
//state es el que pertenece al store de Redux
const mapStateToProps = (state) => ({ //este state es el que tiene acceso al combineReducers con todos los reducers
    citas: state.citas.citas
});//retorna con el nombre citas el array de citas que retorno su reducer

//obtenerCitas es el action, entonces mi componente esta conectado a los action que correspondan para el dispatch
//y tambien esta conectado por medio de mapStateToProps al las citas del state que retorno el su reducer que necesito en esta componente
export default connect(mapStateToProps, {obtenerCitas} )(ListaCitas);
                     //mapStateToProps es el parametro metodo que retorna las citas para que se conecten a las props de este componente
                     //el arreglo de citas quedará en las props de este componente!
                     //el metedo action citasAction quedará en las props de este componente!
                     //obtenerCitas se mapea a las props de este componente