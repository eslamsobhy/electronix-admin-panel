const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_DATA":
      return { ...state, loading: false };
    case "DELETE_ITEM":
      return {
        ...state,
        confirmDeletion: true,
        module: action.payload.module,
        toBeDeletedItem: action.payload.id,
      };
    default:
      return state;
  }
};

export default reducer;
