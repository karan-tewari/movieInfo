import {combineReducers} from 'redux';
import counter from './counter';
import auth from './auth';

const rootReducer = combineReducers({
    counter : counter,
    auth : auth
})

export default rootReducer;