import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {Entypo} from "@expo/vector-icons";

import PropType from "prop-types";

import ContentContainer from "../containers/ContentContainer";
import {styles} from "../styles/Stylesheet";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <ContentContainer navigation={props.navigation} />
      <View style={styles.footer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => props.navigation.navigate("CreateDeck")}
          >
            <Entypo name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

Home.propTypes = {
  navigation: PropType.object,
};

Home.defaultProps = {
  navigation: {}
};


export default  Home;
