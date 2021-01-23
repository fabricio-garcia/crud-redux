import React from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  deleteProductAction,
  getProductEditAction,
} from '../actions/productActions';

const Product = ({ product }) => {
  const { name, price, id } = product;
  const dispatch = useDispatch();
  const history = useHistory(); // enable useHistory to redirect

  // Confirm deletion
  const confirmDeleteProduct = id => {
    // Confirmation alert
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        // Pass to action
        dispatch(deleteProductAction(id));
      }
    });
  };

  // Programmed redirect
  const redirectEditProduct = product => {
    dispatch(getProductEditAction(product));
    history.push(`/products/edit/${product.id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="actions">
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={() => redirectEditProduct(product)}>
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Product;
