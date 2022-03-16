import { ACTION_TYPES } from "../actions/actionsType";
const defaultState = {
  order: [],
};
export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        order: [...state.order, { ...action.payload, quantity: 1 }],
      };
    case ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        order: state.order.filter(
          (item) =>
            item.id !== action.payload.id ||
            item.color !== action.payload.color ||
            item.size !== action.payload.size
        ),
      };
    case ACTION_TYPES.CHANGE_INCREASE_QUANTITY:
      return {
        ...state,
        order: state.order.map((item) => {
          return item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };
    case ACTION_TYPES.CHANGE_DECREASE_QUANTITY: {
      return {
        ...state,
        order: state.order.map((item) => {
          return item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
            ? {
                ...item,
                quantity: item.quantity !== 1 ? item.quantity - 1 : 1,
              }
            : item;
        }),
      };
    }
    default:
      return state;
  }
};
