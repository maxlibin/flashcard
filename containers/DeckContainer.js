import {connect} from "react-redux";
import Deck from "../components/Deck";
import {resetQuiz} from "../actions/DeckActions";

const DeckContainer = connect(({decksReducer}) => {
  return {
    decks: decksReducer.decksList,
  }
}, {
  resetQuiz,
})(Deck);

export default DeckContainer;