import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions from redux
import { createNewProductAction } from '../actions/productActions';

export default function NewProduct() {
  const dispatch = useDispatch();

  // Action call to productAction
  const addProduct = () => dispatch(createNewProductAction());

  const submitNewProduct = e => {
    e.preventDefault();
    addProduct();
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
                  <input type="text" className="form-control" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Price</label>
                  <input type="number" className="form-control" name="price" />
                </div>
                <button
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                  type="submit">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
