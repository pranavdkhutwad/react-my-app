const initialState = {
  list: [],
  isError: false,
};
const students = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STUDENTS_SUCCESS": {
      return {
        ...state,
        list: action.students,
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

export default students;
