import DeckConst from "../const/DeckConst";
import uuidv4 from "uuid/v4";

export const createDeckAction = (inputValue) => (dispatch) => {
  const deck = {
    [inputValue]: {
      title: inputValue,
      id: uuidv4(),
    },
  };

  dispatch({
    type: DeckConst.CREATE_DECK,
    deck,
  })
};

export const createDeckQuestion = (inputValue) => (dispatch) => {
  const card = inputValue;

  dispatch({
    type: DeckConst.CREATE_CARD,
    card,
  });
};

export const startQuiz = (id) => (dispatch) => {
  dispatch({
    type: DeckConst.START_QUIZ,
    id,
  });
};

export const isQuizCorrect = (correct = false) => (dispatch) => {
  dispatch({
    type: DeckConst.IS_CORRECT_QUIZ,
    correct,
  });
};

export const resetQuiz = () => (dispatch) => {
  dispatch({
    type: DeckConst.QUIZ_RESET,
  });
};
