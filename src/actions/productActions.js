import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';
import axiosClient from '../config/axios';

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const addProductSuccess = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = errorState => ({
  type: ADD_PRODUCT_ERROR,
  payload: errorState,
});

// Create new products
export function createNewProductAction(product) {
  return async dispatch => {
    dispatch(addProduct());

    try {
      // Pass data to API
      await axiosClient.post('/products', product);
      // Pass data to reducer if everything is OK
      dispatch(addProductSuccess(product));
    } catch (error) {
      console.error(error);
      dispatch(addProductError(true));
    }
  };
}
