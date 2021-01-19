import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../types';

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const addProductSuccess = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = () => ({});

// Create new products
export function createNewProductAction(product) {
  return dispatch => {
    dispatch(addProduct());

    try {
      dispatch(addProductSuccess(product));
    } catch (error) {
      dispatch(addProductError(true));
    }
  };
}
