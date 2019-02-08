import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';
const middleware = [thunk]
const initialState = {
};
//create store
const store = createStore(rootReducer,applyMiddleware(...middleware,logger));
store.subscribe(function() {
const {questions} = store.getState()
})
export default store;