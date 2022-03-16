import { ACTION_TYPES } from "./actionsType";

export const addItemToCart = (id, name, price, images, color, size, discount) => ({
  type: ACTION_TYPES.ADD_ITEM_TO_CART,
  payload: { id, name, price, images, color, size, discount },
});
export const removeItemFromCart = (id, color, size) => {
  return {
    type: ACTION_TYPES.REMOVE_ITEM_FROM_CART,
    payload: { id, color, size },
  };
};
export const changeIncreaseQuantity = (id, color, size) => {
  return {
    type: ACTION_TYPES.CHANGE_INCREASE_QUANTITY,
    payload: { id, color, size },
  };
};
export const changeDecreaseQuantity = (id, color, size) => {
  return {
    type: ACTION_TYPES.CHANGE_DECREASE_QUANTITY,
    payload: { id, color, size },
  };
};
