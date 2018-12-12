import {combineReducers} from 'redux';
import userReducer from './userreducer';
import questionReducer from '../reducers/questionreducer';
export default combineReducers({
    user: userReducer,
    question: questionReducer
});