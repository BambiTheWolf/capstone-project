import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

import favoritesReducer from "./reducers/favorites";
import gamesReducer from "./reducers/games";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favorites: {
    elements: [],
  },
  games: {
    elements: [],
  },
};

const mainReducer = combineReducers({
  favorites: favoritesReducer,
  games: gamesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  transform: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const configureStore = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);
