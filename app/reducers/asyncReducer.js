const asyncReducer = (state = [], action) => {
  switch (action.type) {
    case "PULLING_DATA":
      return {
        ...state
      };
    case "LOADED_DATA":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default asyncReducer;
