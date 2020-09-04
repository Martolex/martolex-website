import React from "react";
import "./CartItem.scss";
import { Row, Image, Col, Button } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import QuantityChooser from "../utils/QuantityChooser";

const CartItem = (props) => {
  return (
    <Row className="item-container">
      <Col className="imgDiv" xs={4}>
        <Image className="img" src="/book1.png" />
      </Col>
      <Col className="book-description">
        {/* <MdClose className=''/>s */}
        <p className="bookname ">
          A TextBook of Data Communication and networks
        </p>
        <p className="mt-0">
          1 x <span className="text-primary cost">Rs. 295/-</span>
        </p>
        <p>Plan: 1 month plan</p>
        <p>Rent: Rs.225/-</p>
        <Row className="buttons-div">
          <Col className="m-0 p-0 button" xs={8}>
            <QuantityChooser />
          </Col>
          <Col className="m-0 p-0 button" xs={4}>
            <Button className="remove-btn" variant="danger">
              <FaTrash />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CartItem;
