const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER': {
            return {...state, user: action.payload}
        }
        case 'ADD_USER' : {
            return {...state, user: action.payload}
        }
        default:
            return state;
    }
}

export default userReducer;