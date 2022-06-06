export const addToFav = (games) => ({
  type: "ADD_TO_FAV",
  payload: games,
});

export const removeFromFav = (games) => ({
  type: "REMOVE_FROM_FAV",
  payload: games,
});

export const fetchGames = (gameID) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://www.cheapshark.com/api/1.0/games?id=${gameID}`
      );
      if (resp.ok) {
        const { data } = await resp.json();
        dispatch({
          type: "FETCH_GAMES",
          payload: data,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
