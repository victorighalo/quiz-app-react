import {AuthService} from '../shared/services/'

export function addUser(){
    return function(dispatch){
        dispatch({
            type: 'ADD_USER',
            payload: {firstname: 'Victor', lastname: 'Ighalo'}
        })
    }
}

export function getUser(){
    return function(dispatch){
        dispatch({
            type: 'GET_USER',
            payload: {firstname: 'Victor', lastname: 'Ighalo'}
        })
    }
}
