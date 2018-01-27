import React from "react";
import {TouchableOpacity, Text, View} from "react-native";
import {styles} from "../styles/Stylesheet";
import PropType from "prop-types";

const DeckList = (props) => {
  const {deck} = props;
  const deckName = Object.keys(deck)[0];
  const deckItem = Object.values(deck)[0];

  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("Deck", {name: deckName, id: deckItem.id})}
    >
      <View>
        <View style={styles.deck}>
          <Text style={styles.deckTitle}>{deckName}</Text>
          <Text style={styles.deckMeta}>
            Total of {deckItem.questions && deckItem.questions.length || 0}
            &nbsp;{deckItem.questions && deckItem.questions.length === 1 ? "card" : "cards"}
          </Text>
        </View>
        <View style={styles.deckBg1}></View>
        <View style={styles.deckBg2}></View>
      </View>
    </TouchableOpacity>
  );
};

DeckList.propTypes = {
  navigation: PropType.object,
  decks: PropType.object,
};

DeckList.defaultProps = {
  navigation: {},
  decks: {}
};

export default DeckList;
