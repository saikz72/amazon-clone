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
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id == action.id
      );
      if (index >= 0) {
        //item exist, remove it
        newBasket.splice(index, 1);
      } else {
        //item does not exist
        console.warn(`Can't remove (id : ${action.id}) as it doesn't exist`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
