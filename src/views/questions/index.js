import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser, addUser} from '../../actions/useractions';
import {getQuestions} from '../../actions/questionactions';

class index extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        this.props.getQuestions()
    }
    count(){
        this.setState( (prevState) =>{
            return {count: prevState+1}
        }
            )
    }
    render(){
        // Destructure Qustions from store
    const {question} = this.props;
        return (
<div className="container-fluid p-0 questions_container">
<div className="jumbotron">
<h4>Counters</h4>
</div>
<div className="row justify-content-center">
<div className="col-sm-6 questions_box">
<h5 className="font-weight-light mb-5 pb-3">Question 3 (23 remaining)</h5>
{question.questions.map( (item,i) => {
    return(
        <div className="quiz-questions" key={i}>
          <h3>{item.question}</h3>
          <div className='box animated fadeIn'>
            <form>
            {item.options.map( (item2, index) => {
              return (
                  <div key={i+index}>
                  {index+1 * i +1}
                <input type='radio' name="options" id={i+index} value={item2.value} ></input>
                <label htmlFor={i+index}>{item2.value}</label>
                </div>
                )
                })
                }
            </form>
          </div>
      </div>
    )
})
}
</div>
</div>
</div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user, question: state.question}
}
const actions = {getQuestions};
export default connect(mapStateToProps, actions)(index);