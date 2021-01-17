import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>CRUD - React, Redux, REST API & Axios</h1>
      </div>
      <a
        href="/products/new"
        className="btn btn-danger new-post d-block d-md-inline-block">
        Add Product &#43;
      </a>
    </nav>
  );
}
