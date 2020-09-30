import React, { createContext, useContext, useReducer } from "react";

//Prepares the dataLayer

export const StateContext = createContext();

//wrap our apps and provide the Data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pulls information from the data layer
export const useStateValue = () => useContext(StateContext);
