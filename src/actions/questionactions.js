import {QuestionsService} from '../shared/services/'
import { func } from 'prop-types';
import store from '../store/'

export function getQuestions(){
    return function(dispatch){
        QuestionsService.getQuestions().then( (data) => {
            dispatch({
                type: 'LOAD_QUESTIONS',
                payload: data.data,
                isLoaded: true,
                error:false
            })
        })
        .catch( (e) => {
            dispatch({
                type: 'LOAD_QUESTIONS',
                payload: [],
                isLoaded: false,
                error:true
            })
        })
    }
}

export function setQuestion(action, answerIndex, answerValue){
return function(dispatch){
    const {quiz, questions, answers} = store.getState()
    let currentIndex,min = 0, max = 0;
        if(action === 'add'){
            currentIndex = quiz.index + 1;
        }else{
            currentIndex = quiz.index - 1;
        }

        //This controls the state of the questions being answered
        //Like the buttons being dsiabled, etc
        if(currentIndex === questions.questions.length){
            currentIndex = quiz.index;
            max = 1;
            min = 0;
        }
        else if(currentIndex < 0){
            currentIndex = quiz.index;
            min = 1;
            max = 0;
        }
    
        //Find the next question
        let question =  questions.questions.find( (item, index) => 
        index === currentIndex
        );

        //Dispatch the next question to the Quiz Reducer
   dispatch(
       {
           type: 'SET_QUESTION',
           index:currentIndex,
           min:min,
           max:max,
           answerOption: question.answerOption,
           answerValue: question.answerValue, 
           options: question.options,
           question: question.question,
           id: question._id
       }
          )


    //Add answer is answer array is empty
    if(answers.length < 1){
        dispatch(
            {
               type:'SET_ANSWER',
               payload: {
               index:quiz.index,
               answerOption: quiz.answerOption,
               answerValue: quiz.answerValue,
               options: quiz.options,
               question: quiz.question,
               id: quiz._id,
               answer: {
               answerIndex: answerIndex,
               answerValue:answerValue
               }
           }
            }
        )
    }else{
        console.log(quiz.index)
        let answer =  answers.find( (item, index) => {
        return item.index === quiz.index
        }
        );
        // console.log('Answer already is store', answer); 
        if(!answer)
        {
         dispatch(
             {
                type:'SET_ANSWER',
                payload: {
                index:quiz.index,
                answerOption: quiz.answerOption,
                answerValue: quiz.answerValue,
                options: quiz.options,
                question: quiz.question,
                id: quiz._id,
                answer: {
                answerIndex: answerIndex,
                answerValue:answerValue
                }
            }
             }
         )
            }
    }
    
            

}
}

