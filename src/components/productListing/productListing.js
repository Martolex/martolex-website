import React from "react";
import "./productListing.scss";
import ProductCard from "../productListItem/productCard/ProductCard";
import ProductRow from "../productListItem/ProductListItem/ProductListItem";
const ProductListing = ({ displayType, ...props }) => {
  // const Product = (props) => {
  //   return displayType == "grid" ? <ProductCard /> : <ProductRow />;
  // };
  console.log(displayType);
  return (
    <div
      style={{ minHeight: "200px", ...props.style }}
      className="productListing"
    >
      {props.products.length > 0 ? (
        props.products.map((product) =>
          displayType === "grid" ? (
            <ProductCard product={product} />
          ) : (
            <ProductRow product={product} />
          )
        )
      ) : !props.isLoading ? (
        <h1 style={{ textAlign: "center" }}>No more products</h1>
      ) : null}
    </div>
  );
};

export default ProductListing;
