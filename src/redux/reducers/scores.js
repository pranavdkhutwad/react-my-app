const initialState = {
  list: [],
  isError: false,
};
const scores = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SCORES_SUCCESS": {
      return {
        ...state,
        list: action.scores,
        isError: false,
      };
    }
    case "GET_SCORES_ERROR": {
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

export default scores;
