import {combineReducers} from 'redux';
import questionsReducer from './questionsreducer';
export default combineReducers({
    questions: questionsReducer
});