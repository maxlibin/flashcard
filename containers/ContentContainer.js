import {connect} from "react-redux";
import Content from "../components/Content";
import {resetQuiz} from "../actions/DeckActions";

const ContentContainer = connect(({decksReducer}, {navigation}) => {
  return {
    decks: decksReducer.decksList,
    navigation,
  }
}, {
  resetQuiz,
})(Content);

export default ContentContainer;