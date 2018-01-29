import DeckConst from "../const/DeckConst";

export const createDeckAction = (inputValue, id) => (dispatch) => {
  const deck = {
    [inputValue]: {
      title: inputValue,
      id,
    },
  };

  dispatch({
    type: DeckConst.CREATE_DECK,
    deck,
  });
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
    id
  });
};

export const nextQuiz = (id) => (dispatch) => {
  dispatch({
    type: DeckConst.NEXT_QUIZ,
    id
  });
};

export const isQuizCorrect = (correct = false) => (dispatch) => {
  dispatch({
    type: DeckConst.IS_CORRECT_QUIZ,
    correct,
  });
};

export const resetQuiz = (id) => (dispatch) => {
  dispatch({
    type: DeckConst.QUIZ_RESET,
    id,
  });
};
