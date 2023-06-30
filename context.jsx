import React, { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import reducer from "./reducer";

// Define the initial state
const initialState = {
  itemToBeDeleted: "",
  module: "",
  confirmDeletion: false,
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
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    await axios.get("http://localhost:8000/products").then((res) => {
      dispatch({ type: "SET_PRODUCTS", payload: res.data });
    });
    await axios.get("http://localhost:8000/categories").then((res) => {
      dispatch({ type: "SET_CATEGORIES", payload: res.data });
    });
    await axios.get("http://localhost:8000/users").then((res) => {
      dispatch({ type: "SET_USERS", payload: res.data });
    });
    dispatch({ type: "DISPLAY_DATA" });
  };

  // handle deleting item
  const deleteItem = (id, module) => {
    dispatch({ type: "DELETE_ITEM", payload: { id: id, module: module } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, deleteItem }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
