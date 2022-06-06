import { initialState } from "../index";

export default function gamesReducer(state = initialState.games, action) {
  console.log(action, state);

  const { type, payload } = action;

  switch (type) {
    case "FETCH_GAMES":
      return {
        ...state,
        elements: payload,
      };
    default:
      return state;
  }
}
