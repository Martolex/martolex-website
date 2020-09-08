import React from "react";
import ReactStars from "react-stars";
import "./ProductListItem.scss";
import { Row, Col, Image, Button } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { buildBookDetailsUrl } from "../../../utils/buildUrl";

const ProductCard = ({ product }) => {
  const { oneMonth, mrp } = product.rent;
  const discount = ((mrp - oneMonth) / mrp) * 100;
  return (
    <Row className="product-card">
      <Col md={2} className="product-img">
        <Image src={product.images[0]?.url || "/book1.png"} />
      </Col>
      <Col className="pt-1 pl-2" md={7}>
        <a href={buildBookDetailsUrl(product.id)} className="prod-name">
          {product.name}
        </a>
        <p className="prod-author">
          <b>Author:</b> {product.author}
        </p>
        <p className="prod-publisher">
          <b>Publisher:</b> {product.publisher}
        </p>
        <p className="prod-description">
          <b style={{ fontSize: "1.1em" }}>description:</b>{" "}
          {product.description
            ? product.description.substring(200)
            : "Not Available"}
        </p>
        <ReactStars
          className="ratings"
          count={5}
          half={false}
          onChange={(rating) => console.log(rating)}
          size={30}
          color2={"#ffd700"}
        />
      </Col>
      <Col md={3} className="right-block">
        <Row>
          <div className="prices">
            <span className="price">&#8377;{product.rent.oneMonth}/-</span>
            <span className="actual-price">&#8377;{product.rent.mrp}/-</span>
            <p className="discount">Save {discount}%</p>
          </div>
        </Row>
        <Row className="w-100 mt-1">
          <Button variant="success" block>
            <FiShoppingCart className="mr-1" size={20} />
            ADD TO CART
          </Button>
          <Button variant="warning" block>
            <FaRegHeart className="mr-1" size={20} />
            ADD TO WISHLIST
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default ProductCard;
