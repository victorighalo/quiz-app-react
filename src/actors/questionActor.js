export function setQuestion(questions,dispatch){
        let question =  questions.find( (item, index) => 
             index === 0
        );
        dispatch(
            {
                type: 'SET_QUESTION',
                index: 0,
                min:1,
                max:0,
                answerOption: question.answerOption,
                answerValue: question.answerValue, 
                options: question.options,
                question: question.question,
                id: question._id
            }
        )
    
    }