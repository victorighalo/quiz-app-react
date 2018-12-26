const initialState = {
    index:0,
    max:0,
    min:1,
    answerOption: "",
    answerValue: "",
    options: [],
    question: "",
    id: ""
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUESTION': {
            return {...state, 
                index: action.index,
                min: action.min,
                max: action.max,
                answerOption: action.answerOption, 
                answerValue: action.answerValue, 
                options: action.options,
                question: action.question,
                id: action.id
            }
        }
        default:
            return state;
    }
}

export default quizReducer;