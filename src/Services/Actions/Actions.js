import { ADD_TO_CART, REMOVE_TO_CART } from '../Consants'

export const addToCart = (data) => {
    console.log('Store Data', data)
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
export const removeToCart = (data) => {
  // console.warn("action",data)
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};
