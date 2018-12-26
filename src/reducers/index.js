import {combineReducers} from 'redux';
import userReducer from './userreducer';
import questionsReducer from './questionsreducer';
import quizReducer from './quizreducer';
import answerReducer from './answerreducer';
export default combineReducers({
    user: userReducer,
    questions: questionsReducer,
    quiz: quizReducer,
    answers: answerReducer
});