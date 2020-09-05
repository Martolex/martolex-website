import React from "react";
import ReactStars from "react-stars";
import "./ProductDetails.scss";
import {
  Row,
  Col,
  Image,
  Button,
  Container,
  Carousel,
  Form,
} from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import QuantityChooser from "../utils/QuantityChooser";
import ProductListing from "../productListing/productListing";

const productDetails = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col
          className="p-4 carouselContainer d-flex justify-content-center"
          md={4}
        >
          <Carousel className="w-75">
            <Carousel.Item>
              <img className="d-block w-100 " src="/book1.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src="/book1.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 " src="/book1.png" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={8} className="py-4 ">
          <h3 className="prod-name">Chemistry For JEE Main, 2E</h3>
          <p className="sub-head">
            Author: <b className="val">Seema Saini , K. S. Saini</b>
          </p>
          <p className="sub-head">
            Publication:<b className="val"> Cengage Learning India Pvt. Ltd.</b>
          </p>
          <p className="sub-head">
            Book Edition: <b className="val">2nd edition</b>
          </p>
          <p className="sub-head">
            Book ISBN: <b className="val">9789353501372</b>
          </p>
          <p className="sub-head">
            Availability: <b className="val">In Stock</b>
          </p>
          <Row className="align-items-center pl-3">
            Average Rating :{" "}
            <ReactStars
              className="ratings"
              count={5}
              half={false}
              onChange={(rating) => console.log(rating)}
              size={30}
              color2={"#ffd700"}
            />{" "}
            (0)
          </Row>
          <Row className=" pl-3 py-3 align-items-center">
            <p className="mr-4">
              <b>Quantity</b>
            </p>
            <QuantityChooser />
          </Row>
          <Row className="w-100 py-2">
            <Col md={6}>
              <Form className="w-100">
                <Form.Label>Rental Period</Form.Label>
                <Form.Control as="select" size="lg" custom>
                  <option>1 Month</option>
                  <option>2 Months</option>
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>9 months</option>
                </Form.Control>
              </Form>
            </Col>
          </Row>
          <p className="amount">
            Rental Amount : <span>₹350.00</span>
          </p>
          <p className="amount">
            Amount You Pay Now: <span>₹ 985.00</span>
          </p>
          <p className="amount">
            Your Savings: <span>64.47 %</span>
          </p>
          <Row className="my-4">
            <Col md={3} className="py-2">
              <Button block size="lg" variant="success">
                <FaShoppingCart className="mr-2" size={20} />
                ADD TO CART
              </Button>
            </Col>
            <Col md={3} className="py-2">
              <Button block size="lg" variant="warning">
                <FaRegHeart className="mr-2" size={20} />
                ADD TO WISHLIST
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-3">
        <Row className="w-100 pb-2 row-header-box">
          <h2 className="row-header">DESCRIPTION</h2>
        </Row>
        <Col className="px-4">
          A series for chemistry for JEE Main books , a Cengage Exam Crack
          Series product, has been designed in keeping with the needs and
          expectations of students appearing for JEE Main. Its coherent
          presentation and compatibility with the latest prescribed syllabus and
          pattern of JEE will prove extremely useful to JEE aspirants.
        </Col>
      </Row>
      <Row>
        <Row className="w-100 pb-2 row-header-box">
          <h2 className="row-header">RELATED PRODUCTS</h2>
        </Row>
        <ProductListing />
      </Row>
    </Container>
  );
};

export default productDetails;
