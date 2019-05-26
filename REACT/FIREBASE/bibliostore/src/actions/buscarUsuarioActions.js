import { BUSCAR_USUARIO } from './types';

//Este action sera importado y disparado por el dispatcher en el componente donde se busca el usuario y caera como parametro action en su reducer
export const buscarUsuario = usuario => {
   return{
       type: BUSCAR_USUARIO,
       usuario
   }
}