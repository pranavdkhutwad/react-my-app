import axios from "axios";

export const getScores = (query) => {
  return (dispatch) => {
    let url;
    if (query) {
      url = `http://localhost:3300/scores?q=${query}`;
    } else {
      url = "http://localhost:3300/scores";
    }
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "GET_SCORES_SUCCESS", scores: response.data });
      })
      .catch(() =>
        dispatch({ type: "GET_SCORES_ERROR", message: "API Failure" })
      );
  };
};
