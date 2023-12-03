import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';

export const getAllProducts = () => {
  const url = `${BASE_URL}`;

  return axios.get(url)
}

export const getProductsById = (productId: number) => {
  const url = `${BASE_URL}/${productId}`;

  return axios.get(url);
}
