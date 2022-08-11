const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: {},
        isLogged: false,
      };
    default:
      return state;
  }
};

export default userReducer;
