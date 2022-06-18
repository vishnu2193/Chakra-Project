import React, { createContext, useReducer, useEffect } from "react";
import NewHomeReducers from "../reducers/NewHomeReducers";

const NewHomeContext = createContext();

export const NewHomeProvider = ({ children }) => {
  const intialState = {
    Homedata: [],
    loading: true
  };

  const [state, dispatch] = useReducer(NewHomeReducers, intialState);

  //fething

  const fethingHomedata = async () => {
    const response = await fetch(
      `https://shrouded-coast-86509.herokuapp.com/newCollections`
    );
    const data = await response.json();

    // console.log(data)
    dispatch({
      type: "GET_NEWHOMEDATA",
      payload: data
    });
    dispatch({
      type: "LOADING"
    });
  };

  //delete

  const deleteItem = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: id
    });
  };

  useEffect(() => {
    fethingHomedata();
  }, []);

  /// end fething

  return (
    <NewHomeContext.Provider
      value={{ Homedata: state.Homedata, loading: state.loading, deleteItem }}
    >
      {children}
    </NewHomeContext.Provider>
  );
};

export default NewHomeContext;
