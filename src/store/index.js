import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';
import '../actors/questionActor'
import { setQuestion } from '../actors/questionActor';
const middleware = [thunk]
const initialState = {
};
//create store
const store = createStore(rootReducer,applyMiddleware(...middleware,logger));
store.subscribe(function() {
const {quiz, questions} = store.getState()
if(!quiz.options.length){
setQuestion(questions.questions, store.dispatch)
}
})
export default store;