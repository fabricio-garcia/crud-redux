import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_PRODUCTS_DOWNLOAD,
  PRODUCTS_DOWNLOAD_SUCCESS,
  PRODUCTS_DOWNLOAD_ERROR,
  GET_PRODUCT_DELETE,
  PRODUCT_DELETED_SUCCESS,
  PRODUCT_DELETED_ERROR,
} from '../types';
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

const downloadProducts = () => ({
  type: START_PRODUCTS_DOWNLOAD,
  payload: true,
});

const downloadProductsSuccess = products => ({
  type: PRODUCTS_DOWNLOAD_SUCCESS,
  payload: products,
});

const downloadProductsError = () => ({
  type: PRODUCTS_DOWNLOAD_ERROR,
});

const getProductDelete = id => ({
  type: GET_PRODUCT_DELETE,
  payload: id,
});

const deleteProductSuccess = () => ({
  type: PRODUCT_DELETED_SUCCESS,
});

const deleteProductError = () => ({
  type: PRODUCT_DELETED_ERROR,
  payload: true,
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

// Download products action
export function downloadProductsAction() {
  return async dispatch => {
    dispatch(downloadProducts());

    try {
      const result = await axiosClient.get('/products');
      dispatch(downloadProductsSuccess(result.data));
    } catch (error) {
      dispatch(downloadProductsError());
      console.log(error);
    }
  };
}

// Select and delete a product
export function deleteProductAction(id) {
  return async dispatch => {
    dispatch(getProductDelete(id));

    try {
      await axiosClient.delete(`/products/${id}`);
      dispatch(deleteProductSuccess());
      // If deleted then show alert
      Swal.fire('Deleted!', 'Product deleted.', 'success');
    } catch (error) {
      console.log(error);
      dispatch(deleteProductError());
    }
  };
}
