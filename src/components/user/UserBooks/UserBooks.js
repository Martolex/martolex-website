import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookCard from "./BookCard";
import { get } from "../../../utils/requests";
import { bookUploadApi } from "../../../utils/endpoints";

const UserBooks = (props) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const [res] = await get(bookUploadApi.upload, true);
        setBooks(res);
      } catch (err) {
        alert(err);
      }
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-dark font-weight-normal pt-4">Your Books</h2>
          <hr />
        </Col>
      </Row>
      <Row>
        {books.map((book) => (
          <div className="w-100 justify-content-center">
            <BookCard key={book.id} book={book} />
            <hr />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default UserBooks;
