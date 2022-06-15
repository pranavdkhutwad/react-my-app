import axios from "axios";

export const getStudents = (query) => {
  return (dispatch) => {
    let url;
    if (query) {
      url = `http://localhost:3300/students?q=${query}`;
    } else {
      url = "http://localhost:3300/students";
    }
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "GET_STUDENTS_SUCCESS", students: response.data });
      })
      .catch(() =>
        dispatch({ type: "GET_STUDENTS_ERROR", message: "API Failure" })
      );
  };
};
