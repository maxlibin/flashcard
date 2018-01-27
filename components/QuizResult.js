import React, {Component} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import PropType from "prop-types";
import {styles} from "../styles/Stylesheet";

import {connect} from "react-redux";

class QuizResult extends Component {
  render() {
    const {total, name} = this.props.navigation.state.params;
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
                style={[styles.deckButton, styles.deckButtonHome]}
                onPress={() => this.props.navigation.navigate("Home")}
              >
                <MaterialCommunityIcons name="home" size={30} color="#fff" />
                <Text style={[styles.white, styles.deckButtonText]}>Home</Text>
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
};

QuizResult.defaultProps = {
  navigation: {},
  startQuiz: () => false,
  quiz: {},
};

export default connect(({decksReducer}) => ({
  quiz: decksReducer.quiz,
}), {})(QuizResult);
