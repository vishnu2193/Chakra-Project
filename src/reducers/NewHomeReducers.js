const NewHomeReducers = (state, action) => {
  if (action.type === "GET_NEWHOMEDATA") {
    return { ...state, Homedata: action.payload, loading: false };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: false };
  }
  if (action.type === "DELETE_ITEM") {
    return {
      ...state,
      Homedata: state.Homedata.filter((item) => item._id !== action.payload)
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default NewHomeReducers;
