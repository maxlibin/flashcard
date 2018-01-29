import React, {PureComponent} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import PropType from "prop-types";
import {styles} from "../styles/Stylesheet";
import {NavigationActions} from "react-navigation";

class Quiz extends PureComponent {
  static navigationOptions = ({navigation}) => {
    return (
      {
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.state.params.handleBackBtn()}
          >
            <Text style={styles.quizBackBtn}>
              <MaterialCommunityIcons
                name="home"
                size={15}
                color="white"
                style={styles.quizBackBtnIcon}
              />
              &nbsp;Home
            </Text>
          </TouchableOpacity>
        ),
      }
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false,
    }
  }

  componentDidMount() {
    const {id, name, question} = this.props.navigation.state.params;
    this.props.navigation.setParams({
      id,
      name,
      handleBackBtn: this.handleBackBtn
    });

    if (!question) {
      this.props.startQuiz(id);
    }
  }

  handleBackBtn = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: "Home"})
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }

  handleNextPage = (option, id, name, quizNum, total) => {
    this.props.isQuizCorrect(option);

    if (quizNum === total) {
      this.props.navigation.navigate("QuizResult", {id: id, name: name, total: total});
    } else {
      this.props.navigation.navigate("Quiz", {id: id, name: name, question: quizNum + 1})
    }

    this.props.nextQuiz(id);
  };

  handleShowAnswer = () => {
    this.setState({
      showAnswer: !this.state.showAnswer,
    });
  };

  render() {
    const {decks, quiz} = this.props;

    const name = this.props.navigation.state.params.name;
    const id = this.props.navigation.state.params.id;
    const deck = decks.find((deck) => deck[name] && deck[name].id === id)[name];

    const questionsLength = deck && deck.questions && deck.questions.length || 0;
    const question = (deck.questions && deck.questions[0]) || deck.questions[0];

    console.log(quiz);
    return (
      <View style={styles.container}>
        <View style={styles.deckContainer}>
          <View style={styles.deckContainerWrap}>
            <View style={styles.deckContainerContent}>
              <Text style={[styles.deckContainerMeta, styles.deckContainerMetaQuestions]}>
                {quiz && quiz.quizNum || 0} / {questionsLength} {questionsLength === 1 ? "card" : "cards"}
              </Text>
              <Text style={styles.deckContainerDeckPreview}>
                {question.question}
              </Text>

              <TouchableOpacity
                style={[styles.deckAnswerBtn]}
                onPress={() => this.handleShowAnswer()}
              >
                <MaterialCommunityIcons name="comment-question-outline" size={20} color="#333333" />
                <Text style={[styles.deckAnswerBtnText]}>Answer</Text>
              </TouchableOpacity>
              {this.state.showAnswer && (
                <View>
                  <Text>
                    {question.answer}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.deckFooter}>
              <TouchableOpacity
                style={[styles.deckButton, styles.deckButtonBorderRight]}
                onPress={() => this.handleNextPage(true, id, name, quiz.quizNum, questionsLength)}
              >
                <MaterialCommunityIcons name="checkbox-marked-circle" size={20} color="#4db55f" />
                <Text style={[styles.white, styles.deckButtonText]}>Correct</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deckButton}
                onPress={() => this.handleNextPage(false, id, name, quiz.quizNum, questionsLength)}
              >
                <MaterialCommunityIcons name="close-circle" size={20} color="#ff6666" />
                <Text style={[styles.white, styles.deckButtonText]}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.deckContainer, styles.deckContainerBg1]}></View>
        <View style={[styles.deckContainer, styles.deckContainerBg2]}></View>
      </View>
    );
  }
};

Quiz.propTypes = {
  navigation: PropType.object,
  startQuiz: PropType.func,
  nextQuiz: PropType.func,
  isQuizCorrect: PropType.func,
  quiz: PropType.object,
};

Quiz.defaultProps = {
  navigation: {},
  startQuiz: () => false,
  nextQuiz: () => false,
  isQuizCorrect: () => false,
  quiz: {},
};


export default Quiz;
