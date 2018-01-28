import {connect} from "react-redux";
import Content from "../components/Content";

const ContentContainer = connect(({decksReducer}, {navigation}) => {
  return {
    decks: decksReducer.decksList,
    navigation,
  }
}, {})(Content);

export default ContentContainer;