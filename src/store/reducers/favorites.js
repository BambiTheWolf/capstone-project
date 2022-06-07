import { initialState } from "../index";

export default function favoritesReducer(
  state = initialState.favorites,
  action
) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        elements: [...state.elements, payload],
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        elements: state.elements.filter((games) => games !== payload),
      };
    default:
      return state;
  }
}
