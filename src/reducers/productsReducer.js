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
  GET_PRODUCT_EDIT,
  PRODUCT_EDITED_SUCCESS,
  PRODUCT_EDITED_ERROR,
} from '../types';

// Each reducer has it own state
const initialState = {
  products: [],
  error: null,
  loading: false,
  deleteProduct: null,
  editProduct: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
    case START_PRODUCTS_DOWNLOAD:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case ADD_PRODUCT_ERROR:
    case PRODUCTS_DOWNLOAD_ERROR:
    case PRODUCT_DELETED_ERROR:
    case PRODUCT_EDITED_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PRODUCTS_DOWNLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case GET_PRODUCT_DELETE:
      return {
        ...state,
        deleteProduct: action.payload,
      };
    case PRODUCT_DELETED_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== state.deleteProduct
        ),
        deleteProduct: null,
      };
    case GET_PRODUCT_EDIT:
      return {
        ...state,
        editProduct: action.payload,
      };
    case PRODUCT_EDITED_SUCCESS:
      return {
        ...state,
        editProduct: null,
        products: state.products.map(product =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product
        ),
      };
    default:
      return state;
  }
}
