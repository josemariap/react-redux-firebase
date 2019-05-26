import React, { useState, useEffect,  Fragment } from 'react';
//App es una funcion ya que Hooks es para menejar el state sin usar un classComponent y todos los components pueden ser functions
                 /*     HOOKS  -----> no usamos class component    */
//useEffect remplaza al componentDidMount y componentDidUpdate

function App (){
 
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales = [];//si no hay nada en el localStorage hay que asignar un arreglo para pasarle al state
  }
  //useState() = valor inicias del state y retorna dos funciones: 
  //state = this.state y actualizarState = this.setState()
  const [state, actualizarState] = useState(citasIniciales); //valor inicial del state, es un arreglo que tendra las citas

  const crearCita = (cita) => {//cita es el state del componente Formulario y se lo pasa por parametro de la funcion
     const nuevasCitas = [...state, cita]//hacemos una copia del state que es un arreglo y le agregamos la nueva cita que es el state del Formulario
     actualizarState(nuevasCitas); //actualizarState es el setState y le pasamos el arreglo con las citas que es nuevasCitas
    }

    const eliminarCita = (index) => {
       const nuevasCitas = [...state] //copia del state que es un arreglo de citas
       nuevasCitas.splice(index, 1);//splice elimina por index, 1 parametro que indica que solo eliminamos uno
       actualizarState(nuevasCitas);
    }

   //remplaza al componentDidMount y componentDidUpdate si usamos HOOKS, nos carga al principio nuestro state
   //se ejecuta cuando carga el componente App o cuando se actualiza el state
   //el segundo parametro que tiene useEffect es [state] que le indica que solo se ejecute cuando se actualice el state y no otras cosas 
   useEffect(
     () => {
        let citasIniciales = JSON.parse(localStorage.getItem("citas"));
        if(citasIniciales){
            localStorage.setItem('citas', JSON.stringify(state));
        }else{
            localStorage.setItem('citas', JSON.stringify([]));
        }
    }, [state] )

   //cargamos condicionalmente un titulo si hay o no hay citas en el state
   //Keys es una buena forma de saber si un array esta vacio
   const titulo = Object.keys(state).length === 0 ? "No Hay Citas" : "Administrar Las Citas Aqui"

  return(
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
             <Formulario 
                  crearCita = {crearCita}
             />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {state.map((cita, index) => (  //state tiene las citas es un arreglo cargado en el actualizarCitas
              <Cita
                   key  = {index}
                   index = {index}
                   cita = {cita}
                   eliminarCita = {eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

//OTRO COMPONENTE FORMULARIO
//Los componentes que son funciones podemos colocarlos en el mismo js que los invocamos
function Formulario(props){
  //Al usar hooks con useState puedo tener state en todos nuestros conmponentes con funciones
  //useState es el valor inicial del state
  //cita seria nuestro state
  //los name de los input tienen que llamarse igual que lo de su state
  //cada vez que se modifica un input se guarda en el state propio del component Formulario
  //HOOKS PARA MANEJO DEL STATE EN UN SFC
  const [cita, actualizarCita] = useState({
    mascota : '',
    propietario : '',
    fecha : '',
    hora : '',
    sintomas : ''
  });
  
  //actualizarCita seria nuestro setState de cita que seria el state de Formulario, cada vez que se cambia un input se actualiza el state
  //...cita estoy haciendo una copia del state para no perder lo anterior al actualizar
  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name] : e.target.value //pasamos los valores de los input al state directamente
    })
  }

  const enviarCita = (e) => {
      e.preventDefault();
      console.log(cita) // cita seria el state de Formulario y deberá pasar el state del componente principal app
      props.crearCita(cita) //le pasa por parametro su state para que con este state se agregue en el state padre de App
      
      e.currentTarget.reset(); //resetear el formulario  
      //vaciamos el state porque si doy submit aunque el formulario este vacio si el state tiene valores los va a pasar al state del padre
      actualizarCita({
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : ''
      })

  }

  return(
    <Fragment>
      <h2>Crear Cita</h2>

      <form onSubmit={enviarCita}>
                  <label>Nombre Mascota</label>
                  <input 
                    type="text" 
                    name="mascota"
                    className="u-full-width" 
                    placeholder="Nombre Mascota" 
                    onChange={handleChange}
                  />

                  <label>Nombre Dueño</label>
                  <input 
                    type="text" 
                    name="propietario"
                    className="u-full-width"  
                    placeholder="Nombre Dueño de la Mascota" 
                    onChange={handleChange}
                  />

                  <label>Fecha</label>
                  <input 
                    type="date" 
                    className="u-full-width"
                    name="fecha"
                    onChange={handleChange}
                  />               

                  <label>Hora</label>
                  <input 
                    type="time" 
                    className="u-full-width"
                    name="hora" 
                    onChange={handleChange}
                  />

                  <label>Sintomas</label>
                  <textarea 
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                  ></textarea>

                  <button type="submit" className="button-primary u-full-width">Agregar</button>
          </form>
  </Fragment>
  )
}


const Cita = (props) => {

  return( 
     <div className="cita">
        <p>Mascota: <span>{props.cita.mascota}</span></p>
        <p>Propietario: <span>{props.cita.propietario}</span></p>
        <p>Fecha: <span>{props.cita.fecha}</span></p>
        <p>Hora: <span>{props.cita.hora}</span></p>
        <p>Sintomas: <span>{props.cita.sintomas}</span></p>
        <button type="button" className="button eliminar u-full-width" onClick={() => props.eliminarCita(props.index)}>Eliminar X</button>
     </div>
  )
}

export default App;