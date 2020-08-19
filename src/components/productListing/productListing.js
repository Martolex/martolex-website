import React from "react";
import "./productListing.scss";
import Product from "../productListItem/productListLitem";

const ProductListing = (props) => {
  return (
    <div className="productListing">
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductListing;
