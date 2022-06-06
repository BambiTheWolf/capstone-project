export const setStorage = (arr) => {
  const str = JSON.stringify(arr);
  localStorage.setItem("favGames", str);
};

export const getStorage = () => {
  const resp = JSON.parse(localStorage.getItem("favGames"));
  if (resp === null) {
    return [];
  } else {
    return resp;
  }
};

export const getGameInfos = async (gameID) => {
  return await fetch(
    `https://www.cheapshark.com/api/1.0/games?id=${gameID}`
  ).then((res) => res.data);
};
