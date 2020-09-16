import React from "react";
import ReactStars from "react-stars";
import "./ProductCard.scss";
import { buildBookDetailsUrl } from "../../../utils/buildUrl";
import { getMinPlan } from "../../../utils/produtUtils";

const ProductCard = ({ product }) => {
  const productPlan = getMinPlan(product);
  const price = product.rent[productPlan];
  const discount = (
    ((product.rent.mrp - price) / product.rent.mrp) *
    100
  ).toFixed(0);
  return (
    <div className="product">
      <div className="product-img">
        <img
          alt={`${product.name} cover image}`}
          src={product.images[0]?.url || "/book1.png"}
        ></img>
      </div>
      <div className="product-info">
        <a href={buildBookDetailsUrl(product.id)} className="prod-name">
          {product.name}
        </a>
        <p className="prod-author">Author: {product.author}</p>
        <p className="prod-publisher">Publisher: {product.publisher}</p>

        {product.isBuyBackEnabled ? (
          <p className="prod-publisher text-success">Buyback available</p>
        ) : (
          <p className="prod-publisher text-danger">Buyback not available</p>
        )}

        <ReactStars
          count={5}
          half={false}
          onChange={(rating) => console.log(rating)}
          size={30}
          color2={"#ffd700"}
        />
        <div className="prices">
          <span className="price">&#8377;{price}/-</span>
          <span className="actual-price">&#8377;{product.rent.mrp}/-</span>
          <span className="discount">save {discount}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
