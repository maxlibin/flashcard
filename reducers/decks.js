import DeckConst from "../const/DeckConst";
import data from "../utils/data";

const initialState = {
  decksList: data.decks.decksList,
  quiz: {
    id: "",
    quizNum: 0,
    correctNum: 0,
  },
};

addDeck = (deck, state) => {
  const deckItem = Object.keys(deck)[0];
  deck[deckItem].questions = [];

  const deckNewList = [...state.decksList, deck];
  return deckNewList;
};

addCard = (card, state) => {
  const decks = state.decksList.map((deck) => {
    if (Object.values(deck)[0].id === card.id) {
      Object.values(deck)[0].questions.push({
        question: card.question,
        answer: card.answer,
      })
    }
    return deck;
  });

  return decks;
};

const decksReducer = (state = initialState, action) => {
  switch(action.type) {
    case DeckConst.CREATE_DECK:
      return {
        ...state,
        decksList: addDeck(action.deck, state),
      };

    case DeckConst.CREATE_CARD:
      return {
        ...state,
        decksList: addCard(action.card, state),
      };

    case DeckConst.QUIZ_RESET:
      return {
        ...state,
        quiz: {
          ...initialState.quiz
        }
      };

    case DeckConst.START_QUIZ:
      return {
        ...state,
        quiz: {
          id: action.id,
          correctNum: 0,
          quizNum: 1,
        }
      };

    case DeckConst.NEXT_QUIZ:
      return {
        ...state,
        quiz: {
          ...state.quiz,
          quizNum: state.quiz.id !== action.id ? state.quiz.quizNum : state.quiz.quizNum + 1,
        }
      };

    case DeckConst.IS_CORRECT_QUIZ:
      return {
        ...state,
        quiz: {
          ...state.quiz,
          correctNum: action.correct ? state.quiz.correctNum + 1 : state.quiz.correctNum,
        }
      };

    default:
      return {
        ...state
      };
  }
};

export default decksReducer;