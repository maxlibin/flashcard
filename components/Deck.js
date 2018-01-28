import React, {PureComponent} from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import PropType from "prop-types";
import {styles} from "../styles/Stylesheet";

class Deck extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.resetQuiz();
  }

  render() {
    const {decks, navigation} = this.props;
    const name = navigation.state.params.name;
    const id = navigation.state.params.id;
    const deck = decks.find((deck) => deck[name] && deck[name].id === id)[name];
    const questionsLength = deck && deck.questions && deck.questions.length || 0;
    const questionPreview = (deck.questions && deck.questions[Math.floor(Math.random() * questionsLength)]) || "";

    return (
      <View style={styles.container}>
        <View style={styles.deckContainer}>
          <View style={styles.deckContainerWrap}>
            <View style={styles.deckContainerContent}>
              <Text style={styles.deckContainerMeta}>
                There were {questionsLength} {questionsLength === 1 ? "card" : "cards"} in this deck
              </Text>
              <Text style={styles.deckContainerDeckName}>{name}</Text>
              <Text style={styles.deckContainerDeckPreview}>
                {questionPreview.question}
              </Text>
            </View>
            <View style={styles.deckFooter}>
              <TouchableOpacity
                style={[styles.deckButton, styles.deckButtonBorderRight]}
                onPress={() => this.props.navigation.navigate("CreateDeck", {id: id, addCard: true})}
              >
                <MaterialCommunityIcons name="cards" size={20} color="white" />
                <Text style={[styles.white, styles.deckButtonText]}>Add card</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deckButton}
                onPress={() => this.props.navigation.navigate("Quiz", {id: id, name: name })}
              >
                <MaterialCommunityIcons name="clock-start" size={20} color="white" />
                <Text style={[styles.white, styles.deckButtonText]}>Start quiz</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.deckContainer, styles.deckContainerBg1]}></View>
        <View style={[styles.deckContainer, styles.deckContainerBg2]}></View>
      </View>
    )
  }
};

Deck.propTypes = {
  navigation: PropType.object,
  resetQuiz: PropType.func,
};

Deck.defaultProps = {
  navigation: {},
  resetQuiz: () => false,
};


export default  Deck;
