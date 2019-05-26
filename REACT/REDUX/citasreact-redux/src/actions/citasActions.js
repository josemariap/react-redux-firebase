import { MOSTRAR_CITAS, AGREGAR_CITA, BORRAR_CITA} from './types'; 
//estos metodos son las action y se mapean con citasReducer o sea el reducer de citas recibe estos metodos como parametro gracias el middleware

//esto seria el action parametro de citasReducer, estas action se disparan desde algun componente y se mapean a su reducer
export const obtenerCitas = () => {
    return { //el type es el mismo que usa en citasReducer dentro del switch
        type: MOSTRAR_CITAS
    };
};

//este return se mapea como action al citasReducer, este metodo action se importa en el componente de AgregarCita.js y se conecta a sus props
//para poder invocarlo y pasarle la cita nueva por parametro
export const agregarCita = (cita) => {
    return {
       type: AGREGAR_CITA, 
       payload: cita
    }
}

export const borrarCita = (id) => {
    return {
       type: BORRAR_CITA, 
       payload: id
    }
}
