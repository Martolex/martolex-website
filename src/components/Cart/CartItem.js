import React from "react";
import "./CartItem.scss";
import { Row, Image, Col, Button } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import QuantityChooser from "../utils/QuantityChooser";
import {
  modifyCartItemQuantity,
  removeFromCart,
} from "../../redux/actions/CartActions";
import { connect } from "react-redux";

const CartItem = ({ item, ...props }) => {
  console.log(item);
  return (
    <Row className="item-container w-100 m-0">
      <Col className="imgDiv" xs={4}>
        <Image
          className="img"
          src={
            item.book.images.length > 0 ? item.book.images[0].url : "/book1.png"
          }
        />
      </Col>
      <Col className="book-description">
        {/* <MdClose className=''/>s */}
        <p className="bookname ">{item.book.name}</p>
        <p className="mt-0">
          {item.qty} x
          <span className="text-primary cost">
            Rs. {item.book.rent[item.plan] + item.book.rent.deposit}/-
          </span>
        </p>
        <p>Plan: {item.plan}</p>
        <p>Rent: Rs.{item.book.rent[item.plan]}/-</p>
        <Row className="buttons-div">
          <Col className="m-0 p-0 button" xs={8}>
            <QuantityChooser
              initialQuantity={1}
              maxQuantity={item.book.quantity}
              currentQuantity={item.qty}
              onChange={(newQuantity) => {
                props.updateQty(item.book.id, item.plan, newQuantity);
              }}
            />
          </Col>
          <Col className="m-0 p-0 button" xs={4}>
            <Button
              onClick={() => props.remove(item.BookId)}
              className="remove-btn"
              variant="danger"
            >
              <FaTrash />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateQty: (bookid, plan, qty) => {
    dispatch(modifyCartItemQuantity(bookid, plan, qty));
  },
  remove: (bookId) => dispatch(removeFromCart(bookId)),
});

export default connect(null, mapDispatchToProps)(CartItem);
