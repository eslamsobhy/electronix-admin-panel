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
    case "CANCEL_DELETION":
      return {
        ...state,
        confirmDeletion: false,
        module: "",
        toBeDeletedItem: "",
      };
    case "DELETE_CATEGORY":
      const newCategories = state.categories.filter(
        (cat) => cat._id != action.payload
      );
      return {
        ...state,
        categories: newCategories,
        confirmDeletion: false,
        module: "",
        toBeDeletedItem: "",
      };
    case "DELETE_PRODUCT":
      const newProducts = state.products.filter(
        (prod) => prod._id != action.payload
      );
      return {
        ...state,
        products: newProducts,
        confirmDeletion: false,
        module: "",
        toBeDeletedItem: "",
      };
    case "DELETE_USER":
      const newUsers = state.users.filter((user) => user._id != action.payload);
      return {
        ...state,
        users: newUsers,
        confirmDeletion: false,
        module: "",
        toBeDeletedItem: "",
      };
    default:
      return state;
  }
};

export default reducer;
