import React, {Component} from 'react';
import PropTypes from 'prop-types';

//CONNECT REDUX
import { connect } from 'react-redux'; //sirve para conectar el action con el componente para el dispatch y el state unico 
//importamos el action en nuestro component
import { borrarCita } from '../actions/citasActions'; //metodo que retorna el json con el type que será mepado a su propio reducer como parametro action


class Cita extends Component {

    eliminarCita =() => {
        this.props.borrarCita(this.props.cita.id);
    }

    render(){
       
        const {mascota, propietario, fecha, hora, sintomas} = this.props.cita;

        return(
           <div className="media mt-3">
               <div className="media-body"> 
                  <h3 className="mt-0">Nombre de la Macota: {mascota}</h3>
                  <p className="card-text"><span>Nombre del dueño: {propietario}</span></p>
                  <p className="card-text"><span>Fecha: {fecha}</span></p>
                  <p className="card-text"><span>Hora: {hora}</span></p>
                  <p className="card-text"><span>Sintomas:</span></p>
                  <p className="card-text">{sintomas}</p>

                  <button onClick={this.eliminarCita} className="btn btn-danger">
                    Borrar
                  </button>
               </div>
           </div>
        )
    }
}

//cita es objeto, entonces aplico proptype a cada elemento del objeto
Cita.propTypes = {
    cita: PropTypes.shape({
       fecha: PropTypes.string.isRequired,
       hora: PropTypes.string.isRequired,
       mascota: PropTypes.string.isRequired,
       sintomas: PropTypes.string.isRequired,
       id: PropTypes.string.isRequired,
       propietario: PropTypes.string.isRequired
    }),
    borrarCita: PropTypes.func.isRequired
}
export default connect(null, {borrarCita} )(Cita);