import React from "react";
import ReactStars from "react-stars";
import "./ProductListItem.scss";
import { Row, Col, Image, Button } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = (props) => {
  return (
    <Row className="product">
      <Col md={2} className="product-img">
        <Image src="/book1.png" />
      </Col>
      <Col className="pt-1 pl-2" md={7}>
        <a className="prod-name">
          A Textbook Of Data Communication And Networks
        </a>
        <p className="prod-author">
          <b>Author:</b> Dr. Sanjay Sharma
        </p>
        <p className="prod-publisher">
          <b>Publisher:</b> SK Kataria and sons
        </p>
        <p className="prod-description">
          <b style={{ fontSize: "1.1em" }}>description:</b> Graduate Aptitude
          Test in Engineering (GATE) is apparently the toughest examination for
          engineering students.
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
            <span className="price">&#8377;299/-</span>
            <span className="actual-price">&#8377;299/-</span>
            <p className="discount">Save 63%</p>
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
