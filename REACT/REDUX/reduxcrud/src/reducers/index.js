import { combineReducers} from 'redux';
import productosReducers from './productosRedurcers';


export default combineReducers({
    productos: productosReducers
});