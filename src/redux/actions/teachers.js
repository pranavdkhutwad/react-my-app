import axios from "axios";

export const getTeachers = (query) => {
  let url;
  if (query) {
    url = `http://localhost:3300/teachers?q=${query}`;
  } else {
    url = "http://localhost:3300/teachers";
  }

  // redux thunk
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "GET_TEACHERS_SUCCESS", teachers: response.data });
      })
      .catch(() => {
        dispatch({ type: "GET_TEACHERS_ERROR", message: "Api Failure." });
      });
  };
};
