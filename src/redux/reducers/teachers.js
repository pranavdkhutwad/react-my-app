const initialState = {
  list: [],
  isError: false,
};

const teachers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TEACHERS_SUCCESS": {
      return {
        ...state,
        list: action.teachers,
        isError: false,
      };
    }

    case "GET_TEACHERS_FAILURE": {
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

export default teachers;
