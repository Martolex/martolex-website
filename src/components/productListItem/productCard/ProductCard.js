import React from "react";
import ReactStars from "react-stars";
import "./ProductCard.scss";

const ProductCard = (props) => {
  return (
    <div className="product">
      <div className="product-img">
        <img src="/book1.png"></img>
      </div>
      <div className="product-info">
        <a className="prod-name">
          A Textbook Of Data Communication And Networks
        </a>
        <p className="prod-author">Author: Dr. Sanjay Sharma</p>
        <p className="prod-publisher">Publisher: SK Kataria and sons</p>
        <ReactStars
          count={5}
          half={false}
          onChange={(rating) => console.log(rating)}
          size={30}
          color2={"#ffd700"}
        />
        <div className="prices">
          <span className="price">&#8377;299/-</span>
          <span className="actual-price">&#8377;299/-</span>
          <span className="discount">save 63%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
