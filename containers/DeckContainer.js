import {connect} from "react-redux";
import Deck from "../components/Deck";

const DeckContainer = connect(({decksReducer}) => {
  return {
    decks: decksReducer.decksList,
  }
}, {})(Deck);

export default DeckContainer;