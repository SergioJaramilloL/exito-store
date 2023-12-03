import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.types';

export const addProduct = (product: any) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (product: any) => ({
  type: REMOVE_PRODUCT,
  payload: product,
});