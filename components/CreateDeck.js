import React, {Component} from "react";
import {View, TextInput, Text, TouchableOpacity} from "react-native";
import {Entypo} from "@expo/vector-icons";

import PropType from "prop-types";
import {styles} from "../styles/Stylesheet";
import {createDeckQuestion} from "../actions/DeckActions";

class CreateDeck extends Component {
  static navigationOptions = ({navigation}) => (
    {
      headerRight: (
        <TouchableOpacity
          style={styles.createDeckBtn}
          onPress={() => {
            navigation.state.params.handleOnSubmit();
            navigation.goBack();
          }}
        >
          <Text style={styles.createDeckBtnText}>
            <Entypo name="plus" color="#fff" />
            &nbsp; {navigation.state.params && navigation.state.params.addCard ? "Add card" : "Add deck"}
          </Text>
        </TouchableOpacity>
      ),
    }
  );

  constructor(props) {
    super(props);

    this.state = {
      input: "",
      question: "",
      answer: "",
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      handleOnSubmit: this.handleOnSubmit
    });
  }

  handleOnChange = (value, target) => {
    this.setState({
      [target]: value,
    })
  };

  handleOnSubmit = () => {
    const {state} = this.props.navigation;
    if (state.params && state.params.addCard) {
      const inputValue = {
        question: this.state.question,
        answer: this.state.answer,
        id: state.params.id,
      };
      this.props.createDeckQuestion(inputValue)
    } else {
      const inputValue = this.state.deck;
      this.props.createDeckAction(inputValue)
    }
  };

  render() {
    const {state} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.deckContainer}>
          {state.params && state.params.addCard ? (
            <View style={styles.deckContainerWrap}>
              <View style={[styles.deckContainerContent, styles.createDeckInput]}>
                <Text style={styles.createDeckInputLabel}>Question:</Text>
                <TextInput
                  style={styles.deckContainerMetaCard}
                  autoFocus={true}
                  value={this.state.question}
                  onChangeText={(value) => this.handleOnChange(value, "question")}
                >
                </TextInput>
              </View>

              <View style={[styles.deckContainerContent, styles.createDeckInput]}>
                <Text style={styles.createDeckInputLabel}>Answer:</Text>
                <TextInput
                  style={styles.deckContainerMetaCard}
                  value={this.state.answer}
                  onChangeText={(value) => this.handleOnChange(value, "answer")}
                >
                </TextInput>
              </View>
            </View>
          ) : (
            <View style={styles.deckContainerWrap}>
              <View style={[styles.deckContainerContent, styles.createDeckInput]}>
                <TextInput
                  style={styles.deckContainerMeta}
                  autoFocus={true}
                  value={this.state.deck}
                  onChangeText={(value) => this.handleOnChange(value, "deck")}
                >
                </TextInput>
              </View>
              <Text style={[styles.containerPadding, styles.deckContainerMeta]}>Add a name to create deck</Text>
            </View>
          )}
        </View>
        <View style={[styles.deckContainer, styles.deckContainerBg1]}></View>
        <View style={[styles.deckContainer, styles.deckContainerBg2]}></View>
      </View>
    );
  }
};

CreateDeck.propTypes = {
  navigation: PropType.object,
  createDeckAction: PropType.func,
  createDeckQuestion: PropType.func,
};

CreateDeck.defaultProps = {
  navigation: {},
  createDeckAction: () => false,
  createDeckQuestion: () => false,
};


export default  CreateDeck;
