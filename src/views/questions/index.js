import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { getQuestions, answerQuestion, closeTest } from "../../actions/questionactions";


class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
    this.answer = this.answer.bind(this);
    this.closeTest = this.closeTest.bind(this);
  }

  componentDidMount() {
    this.props.getQuestions();
  }
    componentWillReceiveProps(props) {
        const {questions} = props
        let completed = questions.questions.every( (item) => {
          return (item.answered == 1 && item.error == 0)
        });
        if (completed) {
            this.setState({
                completed: true
            });
        }
    }

  answer(event) {
      event.persist();
      this.props.answerQuestion(event.target.id, event.target.dataset.ans)
  }
    closeTest(event) {
      this.props.closeTest()
        if(!this.state.completed){
            alert('Answer all questions');
        }else{
            this.props.history.push('/successful')
        }
  }

  render() {
    // Destructure Qustions from store
    const { questions} = this.props;
    let counter, nextBtn, prevBtn, answeredValue, questionsData;

      if (questions.isLoaded) {
      } else {
          counter = <p className="text-center">Loading...</p>;
      }

    return (
      <div className="questions_container">
          {counter}
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-6 questions_box">
              <div className="quiz-questions">
                <div className="box animated fadeIn">
                    {questions.questions.map( (item, index) => {
                      return (
                        <div key={index} className="question_item">
                            <h4 className={item.error == 0 ? '' : 'text-danger'}>({index+1})  {item.question}</h4>
                            <div>
                                <form
                                    ref={form => this.form = form}
                                >
                            {item.answers.map( (ans, i) => {
                                return (
                                    <span key={i}>
                          <input
                            type="radio"
                            name={index}
                            id={index}
                            data-ans={ans}
                            onChange={this.answer}
                          />
                                <label htmlFor={i}>
                                    {ans}
                                </label>
                                      </span>
                                )
                            })}
                                </form>
                            </div>
                        </div>
                      );
                    })}
                    {questions.isLoaded &&
                  <div className="row justify-content-center pt- pb-3">
                    <div className="col-xs-6 p-4"><button className="btn btn-md- btn-primary" onClick={this.closeTest}>Submit</button></div>
                  </div>
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};
const actions = { getQuestions, answerQuestion, closeTest };
export default connect(
  mapStateToProps,
  actions
)(index);
