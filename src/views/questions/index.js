import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, addUser } from "../../actions/useractions";
import { getQuestions, setQuestion } from "../../actions/questionactions";
import Counter from "../../components/counter";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerChosen: false,
      answerValue: "",
      answerIndex: ""
    };
    this.answer = this.answer.bind(this);
    this.answerChosen = this.answerChosen.bind(this);
  }

  componentDidMount() {
    this.props.getQuestions();
  }
  componentWillReceiveProps() {
    this.setState(prevState => {
      return {
        answerValue: ""
      };
    });
  }
  answer(event) {
    if (event.target.id === "less") {
      this.props.setQuestion(event.target.id);
    } else {
      if (this.state.answerChosen) {
        this.props.setQuestion(
          event.target.id,
          this.state.answerIndex,
          this.state.answerValue
        );
        this.setState(() => {
          return {
            answerChosen: false,
            answerIndex: "",
            answeredValue: ""
          };
        });
      } else {
        alert("Please select an answer");
      }
    }
  }
  answerChosen(event) {
    console.log("Asnwer Index", this.state.answerIndex);
    event.persist();
    this.setState(prevState => {
      return {
        answerChosen: true,
        answerValue: event.target.value,
        answerIndex: event.target.id
      };
    });
  }

  setQuestionToAlreadyAnswered() {
    this.setState(prevState => {
      return {
        answerChosen: false
      };
    });
  }
  render() {
    // Destructure Qustions from store
    const { questions, quiz, answers } = this.props;
    let counter, nextBtn, prevBtn, answeredValue;
    if (questions.isLoaded) {
      counter = (
        <Counter index={quiz.index + 1} max={questions.questions.length} />
      );
    } else {
      counter = <p className="text-center">Loading...</p>;
    }
    if (quiz.max === 1) {
      nextBtn = (
        <button
          className="btn btn-primary btn-md disabled"
          id="add"
          onClick={this.answer}
          disabled
        >
          Answer
        </button>
      );
    } else {
      nextBtn = (
        <button
          className="btn btn-primary btn-md"
          id="add"
          onClick={this.answer}
        >
          Answer
        </button>
      );
    }
    if (quiz.min === 1) {
      prevBtn = (
        <button
          className="btn btn-primary btn-md disabled"
          id="less"
          onClick={this.answer}
          disabled
        >
          Back
        </button>
      );
    } else {
      prevBtn = (
        <button
          className="btn btn-primary btn-md"
          id="less"
          onClick={this.answer}
        >
          Back
        </button>
      );
    }
    answers.forEach((item, index) => {
      if (item.index === quiz.index) {
        answeredValue = item.answer.answerIndex;
        this.setQuestionToAlreadyAnswered();
      }
    });

    return (
      <div className="questions_container">
        <div className="jumbotron">
          <h4>Counters</h4>
          {this.state.answerIndex} {this.state.answerChosen ? "Yes" : "No"}{" "}
          {"ans val " + answeredValue}
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-6 questions_box">
              {counter}
              <div className="quiz-questions">
                <h3>{quiz.question}</h3>
                <div className="box animated fadeIn">
                  <form>
                    {quiz.options.map((item, i) => {
                      return (
                        <div key={i}>
                          <input
                            type="radio"
                            name="options"
                            id={i}
                            value={item.value}
                            checked={
                              this.state.answerIndex == i ||
                              (answeredValue != undefined && answeredValue == i)
                            }
                            onChange={this.answerChosen}
                          />
                          <label htmlFor={i}>
                            {item.value} {i}
                          </label>
                        </div>
                      );
                    })}
                  </form>
                  <div className="row justify-content-center pt- pb-3">
                    <div className="col-xs-6 p-4">{prevBtn}</div>
                    <div className="col-xs-6 p-4">{nextBtn}</div>
                  </div>
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
    user: state.user,
    questions: state.questions,
    quiz: state.quiz,
    answers: state.answers
  };
};
const actions = { getQuestions, setQuestion };
export default connect(
  mapStateToProps,
  actions
)(index);
