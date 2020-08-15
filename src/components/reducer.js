export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding items in basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //logic for removing items in basket
      return { state };
    default:
      return state;
  }
};

export default reducer;
