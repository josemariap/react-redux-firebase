import { MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTO, AGREGAR_PRODUCTO, MOSTRAR_PRODUCTO, EDITAR_PRODUCTO } from './types';
import  axios from 'axios';

//usa dispatch y no return!!
export const mostrarProductos = () => async dispatch => {
    const respuesta = await axios.get('http://localhost:5000/productos');
    dispatch({
        type: MOSTRAR_PRODUCTOS,  //lo toma productosReducers en el parametro action
        payload: respuesta.data   // " "           " "              " "    " "
    })
}

export const mostrarProducto = (id) => async dispatch => {
    const respuesta = await axios.get(`http://localhost:5000/productos/${id}`);
    dispatch({
        type: MOSTRAR_PRODUCTO,  //lo toma productosReducers en el parametro action
        payload: respuesta.data   // " "           " "              " "    " "
    })
}

//lo borramos de la api y tambien hay que borrarlo del state del reducer que devuelve actualizado el state
export const borrarProducto= (id) => async dispatch => {
    await axios.delete(`http://localhost:5000/productos/${id}`);
    dispatch({
       type: ELIMINAR_PRODUCTO, 
       payload: id
    })
}

//lo agregará en en la api y tambien hay que hacer retornar el state del reducer actualizado con el nuevo producto
export const agregarProducto= (producto) => async dispatch => {
    const respuesta = await axios.post('http://localhost:5000/productos', producto);//devuelve el mismo producto agregado
    dispatch({
       type: AGREGAR_PRODUCTO, 
       payload: respuesta.data
    })
}

export const editarProducto= (producto) => async dispatch => {
    const respuesta = await axios.put(`http://localhost:5000/productos/${producto.id}`, producto);//devuelve el mismo producto agregado
    dispatch({
       type: EDITAR_PRODUCTO, 
       payload: respuesta.data
    })
}