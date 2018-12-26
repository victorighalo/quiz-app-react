const initialState = [

]

const answerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ANSWER': {
            return [...state, action.payload]
        }
        default:
            return state;
    }
}

export default answerReducer;