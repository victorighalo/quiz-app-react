import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userreducer from '../reducers/userreducer';
const middleware = [thunk]
const initialState = {
user: {}
};
//create store
const store = createStore(userreducer, initialState,applyMiddleware(...middleware,logger));

export default store;