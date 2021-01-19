import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions from redux
import { createNewProductAction } from '../actions/productActions';

export default function NewProduct() {
  // Component's state
  const [name, saveName] = useState('');
  const [price, savePrice] = useState(0);

  // Use dispatch and create a new function
  const dispatch = useDispatch();

  // Access to state in the store
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  console.log(loading);

  // Action call to productAction
  const addProduct = product => dispatch(createNewProductAction(product));

  const submitNewProduct = e => {
    e.preventDefault();

    // Form validation
    if (name.trim() === '' || price <= 0) {
      return;
    }

    // Create a new product
    addProduct({ name, price });
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Add New Product
              </h2>
              <form onSubmit={submitNewProduct}>
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Price</label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    name="price"
                    value={price}
                    onChange={e => savePrice(Number(e.target.value))}
                  />
                </div>
                <button
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                  type="submit">
                  Add
                </button>
              </form>
              {loading ? <p>Loading . . . </p> : null}
              {error ? (
                <p className="alert alert-danger p2 mt-4 text-center">
                  An error has occurred
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
