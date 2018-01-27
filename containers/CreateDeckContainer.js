import {connect} from "react-redux";
import CreateDeck from "../components/CreateDeck";
import {createDeckAction, createDeckQuestion} from "../actions/DeckActions";

const DeckContainer = connect(({decksReducer}) => {
  return {
    decks: decksReducer.decksList,
  }
}, {
  createDeckAction,
  createDeckQuestion,
})(CreateDeck);

export default DeckContainer;