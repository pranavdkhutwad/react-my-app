import axios from "axios";

export const loginToApp = (cred) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/login", cred)
      .then((response) => {
        const userInfo = response.data;
        localStorage.setItem("token", userInfo.token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        dispatch({ type: "LOGIN_SUCCESS", userInfo });
      })
      .catch(() => dispatch({ type: "LOGIN_FAILURE" }));
  };
};
