
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
        case 'EDIT_QUESTION': {
            const updatedQuestions = state.questions.map( (item, i) => {
                if(i === action.question_index){
                    return item.answered = action.payload;
                }
                return item
            })
            return {...state, questions:updatedQuestions}
        }
        case 'VALIDATE_QUESTION': {
            const updatedQuestions = state.questions.map( (item, i) => {
                if(item.answered == 0){
                    item.error = 1
                    return item;
                }else{
                    item.error = 0
                }
                return item
            })
            return {...state, questions:updatedQuestions}
        }
        default:
            return state;
    }
}

export default questionsReducer;