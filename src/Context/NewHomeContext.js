import React, { createContext, useReducer, useEffect } from "react";
import NewHomeReducers from "../reducers/NewHomeReducers";
import axios from "axios";

const NewHomeContext = createContext();

export const NewHomeProvider = ({ children }) => {
  const intialState = {
    Homedata: [],
    loading: false,
    error: false
  };

  const [state, dispatch] = useReducer(NewHomeReducers, intialState);

  //fething

  const fethingHomedata = async () => {
    dispatch({
      type: "LOADING",
      payload: true
    });
    try {
      const response = await axios.get(
        `https://shrouded-coast-86509.herokuapp.com/newCollections`
      );
      const data = response.data;

      dispatch({
        type: "GET_NEWHOMEDATA",
        payload: data
      });
      dispatch({
        type: "LOADING",
        payload: false
      });
      dispatch({ type: "ERROR", payload: false });
    } catch (error) {
      dispatch({
        type: "LOADING",
        payload: false
      });
      console.log(error.message);
      dispatch({ type: "ERROR", payload: true });
    }
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
      value={{
        Homedata: state.Homedata,
        loading: state.loading,
        error: state.error,
        deleteItem
      }}
    >
      {children}
    </NewHomeContext.Provider>
  );
};

export default NewHomeContext;
