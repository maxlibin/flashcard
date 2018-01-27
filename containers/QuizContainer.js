import {connect} from "react-redux";
import Quiz from "../components/Quiz";
import {startQuiz, isQuizCorrect} from "../actions/DeckActions";

const QuizContainer = connect(({decksReducer}) => {
  return {
    decks: decksReducer.decksList,
    quiz: decksReducer.quiz,
  }
}, {
  startQuiz,
  isQuizCorrect,
})(Quiz);

export default QuizContainer;