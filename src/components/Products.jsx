import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { downloadProductsAction } from '../actions/productActions';

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Query API
    const loadProducts = () => dispatch(downloadProductsAction());
    loadProducts();
  }, []);

  return (
    <>
      <h2 className="text-center my-5">Product List</h2>
      <table className="table table-stripped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </>
  )
}
