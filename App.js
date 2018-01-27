import React from "react";
import decksReducer from "./reducers/decks";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {
  persistStore,
  persistCombineReducers,
} from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import thunk from "redux-thunk";
import {Text, AsyncStorage} from "react-native";
import Main from "./components/Main";
import data from "./utils/data";

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = persistCombineReducers(config, {decksReducer});

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

const persistor = persistStore(store);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
        >
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}


