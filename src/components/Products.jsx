import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { downloadProductsAction } from '../actions/productActions';
import Product from './Product';

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Query API
    const loadProducts = () => dispatch(downloadProductsAction());
    loadProducts();
  }, []);

  // Get state
  const products = useSelector(state => state.products.products);
  const error = useSelector(state => state.products.error);
  const loading = useSelector(state => state.products.loading);

  return (
    <>
      <h2 className="text-center my-5">Product List</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          An error occurred
        </p>
      ) : null}
      {loading ? <p className="text-center">Loading . . . </p> : null}

      <table className="table table-stripped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0
            ? 'No products found'
            : products.map(product => (
                <Product key={product.id} product={product} />
              ))}
        </tbody>
      </table>
    </>
  );
}
