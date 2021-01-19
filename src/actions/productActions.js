import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

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
      // Display alert
      Swal.fire('Correct', 'Product added successfully', 'success');
    } catch (error) {
      console.error(error);
      // If the error exist change state as well
      dispatch(addProductError(true));
      // Display alert
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an error, try again later',
      });
    }
  };
}
