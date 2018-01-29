import React, {Component} from "react";
import Home from "../components/Home";
import DeckContainer from "../containers/DeckContainer";
import CreateDeck from "../containers/CreateDeckContainer";
import {StackNavigator} from "react-navigation";
import QuizContainer from "../containers/QuizContainer";
import QuizResult from "../components/QuizResult";
import {connect, Connect} from "react-redux";
import {setLocalNotification} from "../utils/helper";

const headerStyle = {
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#4B4363",
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontSize: 22,
    color: "rgba(255,255,255, 0.6)",
  },
  headerTintColor: "rgba(255,255,255, 0.3)",
  headerBackTitleStyle: {
    color: "rgba(255,255,255, 0.6)",
  }
};

const StackView = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Flashcard",
      ...headerStyle,
    }
  },

  Deck: {
    path: "deck/:name",
    screen: DeckContainer,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.state.params.name,
        ...headerStyle
      }
    }
  },

  Quiz: {
    path: "deck/:name/:question",
    screen: QuizContainer,
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.state.params.name,
        ...headerStyle
      }
    }
  },

  QuizResult: {
    path: "deck/:name/quiz-ended",
    screen: QuizResult,
    navigationOptions: ({navigation}) => {
      return {
        title: "Quiz result",
        ...headerStyle
      }
    }
  },

  CreateDeck: {
    path: "newdeck",
    screen: CreateDeck,
    navigationOptions: ({navigation}) => {
      const title = navigation.state.params &&
        navigation.state.params.addCard ? "Add card" : "Add deck";

      return {
        title: title,
        ...headerStyle
      }
    }
  },
});

class Main extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <StackView />
    );
  }
};

export default connect(({decksReducer}) => ({
  hasDoneAQuiz: decksReducer.hasDoneAQuiz,
}), {})(Main);