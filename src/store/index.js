import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';


const middleware = [thunk]
const initialState = {
user: {}
};
//create store
const store = createStore(rootReducer, initialState,applyMiddleware(...middleware,logger));

export default store;