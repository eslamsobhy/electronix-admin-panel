import React, { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import reducer from "./reducer";

// Define the initial state
const initialState = {
  loading: true,
  loggedIn: false,
  products: [],
  categories: [],
  users: [],
};

// Create the context
export const AppContext = createContext();

// Create the context provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   Fetch data from APIs using axios
  const fetchData = () => {
    axios.get("http://localhost:8000/products").then((res) => {
      dispatch({ type: "SET_PRODUCTS", payload: res.data });
    });
    axios.get("http://localhost:8000/categories").then((res) => {
      dispatch({ type: "SET_CATEGORIES", payload: res.data });
    });
    axios.get("http://localhost:8000/users").then((res) => {
      dispatch({ type: "SET_USERS", payload: res.data });
    });
  };

  useEffect(() => {
    dispatch({ type: "LOADING" });
    fetchData();
    dispatch({ type: "DISPLAY_DATA" });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};