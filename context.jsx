import React, { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import reducer from "./reducer";

// Define the initial state
const initialState = {
  toBeDeletedItem: "",
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
    await axios
      .get("http://localhost:8000/users", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        dispatch({ type: "SET_USERS", payload: res.data });
      });
    dispatch({ type: "DISPLAY_DATA" });
  };

  // handle deleting item
  const deleteItem = (id, module) => {
    dispatch({ type: "DELETE_ITEM", payload: { id: id, module: module } });
  };

  // cancel deletion
  const cancelDeletion = () => {
    dispatch({ type: "CANCEL_DELETION" });
  };

  // confirm deletion
  const deletionConfirm = (id, module) => {
    switch (module) {
      case "category":
        axios.delete(`http://localhost:8000/categories/${id}`);
        dispatch({ type: "DELETE_CATEGORY", payload: id });
        break;
      case "user":
        axios.delete(`http://localhost:8000/users/${id}`);
        dispatch({ type: "DELETE_USER", payload: id });
        break;
      case "product":
        axios.delete(`http://localhost:8000/products/${id}`);
        dispatch({ type: "DELETE_PRODUCT", payload: id });
        break;
      default:
        break;
    }
  };

  // Update Category
  const updateCategory = (category) => {
    dispatch({ type: "UPDATE_CATEGORY", payload: category });
  };

  // Create category
  const createCategory = (category) => {
    dispatch({ type: "CREATE_CATEGORY", payload: category });
  };

  // update User
  const updateUser = (user) => {
    dispatch({ type: "UPDATE_USER", payload: user });
  };

  // add user
  const addUser = (user) => {
    dispatch({ type: "ADD_USER", payload: user });
  };

  // login
  const login = () => {
    dispatch({ type: "LOGIN" });
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchData,
        deleteItem,
        cancelDeletion,
        deletionConfirm,
        updateCategory,
        createCategory,
        updateUser,
        addUser,
        login,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
