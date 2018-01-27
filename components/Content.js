import React, {Component} from "react";
import {View, FlatList, Text} from "react-native";
import PropType from "prop-types";
import DeckList from "./DeckList";
import {styles} from "../styles/Stylesheet";
import {MaterialCommunityIcons} from "@expo/vector-icons";

class Content extends Component {
  componentDidMount() {
    this.props.resetQuiz();
  }
  render() {
    return (
      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Text style={[styles.white, styles.contentTitleText]}>Total of {this.props.decks.length} decks</Text>
        </View>
        <FlatList
          data={this.props.decks}
          renderItem={({item}) => <DeckList deck={item} navigation={this.props.navigation} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
};

Content.propTypes = {
  decks: PropType.array,
  navigation: PropType.object,
  resetQuiz: PropType.func,
};

Content.defaultProps = {
  decks: [],
  navigation: {},
  resetQuiz: () => false,
};

export default Content;
