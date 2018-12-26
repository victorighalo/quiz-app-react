const initialState = {
    questions: [],
    isLoaded: false,
    error:false
}

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_QUESTIONS': {
            return {...state, questions: action.payload, isLoaded: action.isLoaded, error: action.error}
        }
        default:
            return state;
    }
}

export default questionsReducer;