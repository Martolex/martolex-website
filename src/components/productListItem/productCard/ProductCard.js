import React from "react";
import ReactStars from "react-stars";
import "./ProductCard.scss";
import { buildBookDetailsUrl } from "../../../utils/buildUrl";

const ProductCard = ({ product }) => {
  const { oneMonth, mrp } = product.rent;
  const discount = ((mrp - oneMonth) / mrp) * 100;
  return (
    <div className="product">
      <div className="product-img">
        <img src={product.images[0]?.url || "/book1.png"}></img>
      </div>
      <div className="product-info">
        <a href={buildBookDetailsUrl(product.id)} className="prod-name">
          {product.name}
        </a>
        <p className="prod-author">Author: {product.author}</p>
        <p className="prod-publisher">Publisher: {product.publisher}</p>
        <ReactStars
          count={5}
          half={false}
          onChange={(rating) => console.log(rating)}
          size={30}
          color2={"#ffd700"}
        />
        <div className="prices">
          <span className="price">&#8377;{product.rent.oneMonth}/-</span>
          <span className="actual-price">&#8377;{product.rent.mrp}/-</span>
          <span className="discount">save {discount.toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
