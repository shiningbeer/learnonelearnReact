import { combineReducers } from 'redux';
import findReducer from './findReducer';

const rootReducer = combineReducers({
    findState: findReducer,
})
export default rootReducer