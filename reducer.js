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
    case "UPDATE_CATEGORY":
      const newCats = state.categories.map((cat) => {
        if (cat._id == action.payload.id) {
          return action.payload;
        }
        return cat;
      });
      return { ...state, categories: newCats };
    case "CREATE_CATEGORY":
      const newCates = [...state.categories, action.payload];
      return { ...state, categories: newCates };
    case "UPDATE_USER":
      const users = state.users.map((user) => {
        if (user._id == action.payload.id) {
          return action.payload;
        }
        return user;
      });
      return { ...state, users: users };
    case "ADD_USER":
      const newUs = [...state.users, action.payload];
      return { ...state, users: newUs };
    case "LOGIN":
      return { ...state, loggedIn: true };
    default:
      return state;
  }
};

export default reducer;
