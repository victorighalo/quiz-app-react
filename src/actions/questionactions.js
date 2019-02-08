import {QuestionsService} from '../shared/services/index';
import store from '../store/index';

export function getQuestions(){
    return function(dispatch){
        QuestionsService.getQuestions().then( (data) => {
            let newQuestions = buildQuestions(data.data.questions);
            dispatch({
                type: 'LOAD_QUESTIONS',
                payload: newQuestions,
                isLoaded: true,
                error:false
            })
        })
        .catch( (e) => {
            dispatch({
                type: 'LOAD_QUESTIONS',
                payload: e,
                isLoaded: false,
                error:true
            })
        })
    }
}

export function answerQuestion(questionIndex, userAns){
return function(dispatch){
    const { questions} = store.getState()

        //Find the next question
        let question =  questions.questions.find( (item, index) =>
        index == questionIndex
        );

    question.answered = 1;
    question.userAns = userAns;
        //Dispatch the next question to the Quiz Reducer
   dispatch(
       {
           type: 'EDIT_QUESTION',
           payload:question,

       }
          )
}
}

export function closeTest(){
return function(dispatch){
   dispatch(
       {
           type: 'VALIDATE_QUESTION'

       }
          )
}
}

function buildQuestions(questions){
    let newQuestions = [];
        questions.map( (item) => {
        newQuestions.push({
            question: item,
            answers: ['1', '2', '3'],
            answer:1,
            answered:0,
            userAns: '',
            error: 0
        })
    });
        return newQuestions;
}

