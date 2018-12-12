const initialState = {
    questions: []
}

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_QUESTIONS': {
            return {...state, questions: action.payload}
        }
        default:
            return state;
    }
}

export default questionReducer;