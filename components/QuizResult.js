import React, {Component} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {NavigationActions} from "react-navigation";
import {resetQuiz} from "../actions/DeckActions";

import PropType from "prop-types";
import {styles} from "../styles/Stylesheet";

import {connect} from "react-redux";

class QuizResult extends Component {
  render() {
    const {total, name, id} = this.props.navigation.state.params;
    const {quiz} = this.props;

    const {correctNum} = quiz;

    return (
      <View style={styles.container}>
        <View style={styles.deckContainer}>
          <View style={styles.deckContainerWrap}>
            <View style={styles.deckContainerContent}>
              <View style={styles.deckContainerContentResult}>
                <View>
                  <Text style={styles.deckContainerContentResultName}>{name}</Text>
                  <Text style={styles.deckContainerContentResultPercent}>{Math.round(correctNum / total * 100)}%</Text>
                </View>
              </View>
            </View>
            <View style={styles.deckFooter}>
              <TouchableOpacity
                style={[styles.deckButton, styles.deckButtonBorderRight]}
                onPress={() => {
                  const resetAction = NavigationActions.reset({
                    index: 1,
                    actions: [
                      NavigationActions.navigate({routeName: "Deck", params: {name: name, id: id}}),
                      NavigationActions.navigate({routeName: "Quiz", params: {name: name, id: id}})
                    ]
                  });
                  this.props.navigation.dispatch(resetAction);
                }}
              >
                <MaterialCommunityIcons name="restart" size={20} color="white" />
                <Text style={[styles.white, styles.deckButtonText]}>Restart quiz</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deckButton}
                onPress={() => {
                  const resetAction = NavigationActions.reset({
                    index: 1,
                    actions: [
                      NavigationActions.navigate({routeName: "Home"}),
                      NavigationActions.navigate({routeName: "Deck", params: {name: name, id: id}})
                    ]
                  });

                  this.props.navigation.dispatch(resetAction)
                }}
              >
                <MaterialCommunityIcons name="backspace" size={20} color="white" />
                <Text style={[styles.white, styles.deckButtonText]}>Back to deck</Text>
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

QuizResult.propTypes = {
  navigation: PropType.object,
  startQuiz: PropType.func,
  quiz: PropType.object,
  resetQuiz: PropType.func,
};

QuizResult.defaultProps = {
  navigation: {},
  startQuiz: () => false,
  quiz: {},
  resetQuiz: () => false,
};

export default connect(({decksReducer}) => ({
  quiz: decksReducer.quiz,
}), {
  resetQuiz
})(QuizResult);
