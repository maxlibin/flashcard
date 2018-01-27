import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  white: {
    color: "#fff",
  },

  textCenter: {
    textAlign: "center",
  },

  full: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#4B4363',
    padding: 10,
  },

  totalViewsBox: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    padding: 5,
    marginLeft: 5,
  },

  totalViewsNumber: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },

  footer: {
    marginTop: "auto",
    paddingTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },

  footerButton: {
    backgroundColor: "#62597a",
    paddingRight: 70,
    paddingLeft: 70,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 70,
    flexDirection: "row",
  },

  deckContainer: {
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 5,
    marginBottom: 40,
    zIndex: 9,
  },

  deckContainerBg1: {
    backgroundColor: "#5c527c",
    position: "absolute",
    width: "96%",
    height: "96%",
    left: 20,
    top: 8,
    zIndex: 1,
  },

  deckContainerBg2: {
    backgroundColor: "#51496e",
    position: "absolute",
    width: "90%",
    height: "96%",
    left: 30,
    top: 18,
    zIndex: 0,
  },

  content: {
    flex: 1,
  },

  contentTitle: {
    marginBottom: 10,
  },

  contentTitleText: {
    fontSize: 16,
    opacity: 0.8,
  },

  deck: {
    backgroundColor: "#fff",
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
    marginBottom: 20,
    zIndex: 9,
  },

  deckBg1: {
    position: "absolute",
    top: 1,
    left: "2%",
    width: "96%",
    height: "86%",
    backgroundColor: "#ccc",
    zIndex: 1,
    borderRadius: 5,
  },

  deckBg2: {
    position: "absolute",
    top: 6,
    left: "4%",
    width: "92%",
    height: "86%",
    backgroundColor: "#999",
    zIndex: 0,
    borderRadius: 5,
  },

  deckTitle: {
    fontSize: 18,
    marginBottom: 5,
  },

  deckMeta: {
    fontSize: 14,
    opacity: 0.7,
  },

  deckContainerWrap: {
    flex: 1
  },

  deckContainerContent: {
    padding: 30,
  },

  deckContainerContentResult: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },

  deckContainerContentResultName: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },

  deckContainerContentResultPercent: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },

  containerPadding: {
    padding: 10,
  },

  createDeckInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },

  createDeckInputLabel: {
    marginBottom: 5,
  },

  createDeckBtn: {
    borderWidth: 1,
    borderColor: "#fff",
    marginRight: 10,
    marginTop: 2,
    paddingTop: 3,
    paddingBottom: 3,
    paddingRight: 8,
    paddingLeft: 8,
    borderRadius: 5,
    opacity: .6,
  },

  createDeckBtnText: {
    color: "#fff",
  },

  quizBackBtn: {
    marginLeft: 10,
    opacity: 0.6,
    color: "#fff",
  },

  quizBackBtnIcon: {
    paddingTop: 10,
  },

  deckContainerMeta: {
    fontSize: 18,
    opacity: 0.6,
    marginBottom: 5,
  },

  deckContainerMetaQuestions: {
    marginBottom: 20,
  },

  deckContainerMetaCard: {
    marginBottom: -10,
  },

  deckContainerDeckName: {
    fontSize: 32,
    opacity: 1,
    marginBottom: 30,
  },

  deckContainerDeckPreview: {
    fontSize: 20,
    opacity: .8,
  },

  deckFooter: {
    marginTop: "auto",
    backgroundColor: "#6b6091",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: "row",
  },

  deckButton: {
    paddingTop: 25,
    paddingBottom: 25,
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  deckButtonHome: {
    width: "100%",
  },

  deckAnswerBtn: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
    opacity: 0.5,
  },

  deckAnswerBtnText: {
    marginLeft: 5,
  },

  deckButtonBorderRight: {
    borderRightWidth: 1,
    borderRightColor: "rgba(255, 255, 255, 0.1)",
  },

  deckButtonText: {
    marginLeft: 5,
  }
});