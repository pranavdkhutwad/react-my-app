const initialState = {
  userInfo: null,
  token: null,
  isError: false,
};
const login = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        userInfo: action.userInfo,
        token: action.userInfo.token,
      };
    }
    case "LOGIN_FAILURE": {
      return {
        ...state,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default login;
