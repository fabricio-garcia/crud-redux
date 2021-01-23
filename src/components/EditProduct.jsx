import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../actions/productActions';
import { useHistory } from 'react-router-dom';

export default function EditProduct() {
  const history = useHistory();
  const dispatch = useDispatch();

  // New product state
  const [product, saveProduct] = useState({
    name: '',
    price: '',
  });

  // Product to Edit
  const productEdit = useSelector(state => state.products.editProduct);
  const { name, price } = product;

  // Fill state automatically
  useEffect(() => {
    saveProduct(productEdit);
  }, [productEdit]);

  // Read form data
  const onChangeForm = e => {
    saveProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const submitEditProduct = e => {
    e.preventDefault();
    dispatch(editProductAction(product));
    history.push('/');
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Edit Product
              </h2>
              <form onSubmit={submitEditProduct}>
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={onChangeForm}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={price}
                    onChange={onChangeForm}
                  />
                </div>
                <button
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                  type="submit">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
