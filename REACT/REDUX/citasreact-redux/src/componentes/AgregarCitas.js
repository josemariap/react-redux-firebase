import React, { Component } from 'react';
import uuid from 'uuid'; //unique universal IDS
import PropTypes from 'prop-types';

//CONNECT REDUX
import { connect } from 'react-redux'; //sirve para conectar el action con el componente para el dispatch y el state unico 
//importamos el action en nuestro component
import { agregarCita } from '../actions/citasActions'; //metodo que retorna el json con el type que será mepado a su propio reducer como parametro action
import { validarFormulario } from '../actions/errorActions'; //este action quedara en las props y se dispara por el dispatcher y va al ErrorReducer como segundo parametro

class AgregarCitas extends Component {

  componentWillMount(){
      this.props.validarFormulario(false);
  }

  nombreMascotaRef = React.createRef();
  propietarioRef = React.createRef();
  fechaRef = React.createRef();
  horaRef = React.createRef();
  sintomasRef = React.createRef();

  crearNuevaCita = (e) => {
     e.preventDefault();
     
     const mascota = this.nombreMascotaRef.current.value;
     const propietario = this.propietarioRef.current.value;
     const hora = this.horaRef.current.value;
     const fecha = this.fechaRef.current.value;
     const sintomas = this.sintomasRef.current.value;
    
     if(mascota === '' || propietario === '' || hora === '' || fecha === '' || sintomas === ''){
       this.props.validarFormulario(true);
     }else{
        const cita = {
         id: uuid(),
         mascota,
         propietario,
         hora,
         fecha,
         sintomas
       }

        //se envia el objeto cita al padre para actualizar el state que es un arreglo
        this.props.agregarCita(cita);

        e.currentTarget.reset();

       this.props.validarFormulario(false);
     }
     
   
  }   

  render() {
    const existeError = this.props.error;

    return (
       <div className="card mt-5">
         <div className="card-body">
           <h2 className="card-title text-center mb5">Agregar las citas aquí</h2>

           <form onSubmit={this.crearNuevaCita}>
                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                    <div className="col-sm-8 col-lg-10">
                        <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                    <div className="col-sm-8 col-lg-10">
                        <input ref={this.propietarioRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                    </div>
                </div>
        
                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                    <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                        <input ref={this.fechaRef} type="date" className="form-control" />
                    </div>                            
        
                    <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                    <div className="col-sm-8 col-lg-4">
                        <input ref={this.horaRef}  type="time" className="form-control" />
                    </div>
                </div>
        
                <div className="form-group row">
                    <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                    <div className="col-sm-8 col-lg-10">
                        <textarea  ref={this.sintomasRef} className="form-control"></textarea>
                    </div>
                </div>
                <div className="form-group row justify-content-end">
                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-success w-100">Agregar</button>
                    </div>
                </div>
            </form>

            {existeError ? <div className="alert alert-danger text-center">Todos lo campos son obligatorios</div> : '' }   

         </div>
       </div>
    );
  }
}

AgregarCitas.propType = {
    agregarCita: PropTypes.func.isRequired
}

//mapea lo que le indico del state del store a las props del componente
const mapStateToProps = (state) => ( {
    citas: state.citas.citas, //accede del state principal al conbinedReducers y al reducer  y lo conecta a las props de este componente
    error: state.error.error
}
)

//agregarCita que es el metodo action que viene del citasAction.js queda conectado a las props de este componente
export default connect(mapStateToProps, {agregarCita, validarFormulario} )(AgregarCitas);

