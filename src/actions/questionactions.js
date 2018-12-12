import {QuestionsService} from '../shared/services/'

export function getQuestions(){
    return function(dispatch){
        QuestionsService.getQuestions().then( (data) => {
            dispatch({
                type: 'LOAD_QUESTIONS',
                payload: data.data
            })
        })
    }
}

