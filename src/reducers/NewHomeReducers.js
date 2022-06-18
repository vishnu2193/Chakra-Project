const NewHomeReducers = (state, action) => {
  if (action.type === "GET_NEWHOMEDATA") {
    return { ...state, Homedata: action.payload };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: action.payload };
  }
  if (action.type === "ERROR") {
    return { ...state, error: action.payload };
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
