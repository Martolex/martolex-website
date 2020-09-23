import React from "react";
import "./BookCard.scss";
import { Row, Col, Image, Button } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { buildBookDetailsUrl } from "../../../utils/buildUrl";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  console.log(book.isApproved);
  return (
    <Row className="book-card">
      <Col md={2} xs={12} className="book-img">
        <Image src={book.images[0]?.url || "/book1.png"} />
      </Col>
      <Col className="pt-1 pl-2 mb-2" md={7}>
        <p className="prod-name ">{book.name}</p>
        <p className="prod-author">
          <b>Author:</b> {book.author}
        </p>
        <p className="prod-publisher">
          <b>Publisher:</b> {book.publisher}
        </p>
        {book.isBuyBackEnabled ? (
          <p className="prod-publisher text-success">Buyback available</p>
        ) : (
          <p className="prod-publisher text-danger">Buyback not available</p>
        )}
        {!book.isApproved && (
          <p className="prod-publisher text-danger font-italic mt-2">
            Approval Pending
          </p>
        )}
        {book.quantity > 0 ? (
          <p className="prod-publisher ">
            <b>Books Remaining :</b> {book.quantity}
          </p>
        ) : (
          <p className="prod-publisher text-danger font-italic mt-2">
            Sold Out
          </p>
        )}
      </Col>
      <Col md={3} className="right-block mb-2">
        <Row className="w-100">
          <Button href={buildBookDetailsUrl(book.id)} block>
            VIEW BOOK
          </Button>

          <Button block>VIEW ORDERS</Button>
          <Button block variant="warning">
            EDIT
          </Button>
          <Button block variant="danger">
            REMOVE
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default BookCard;
