import React from "react";
import ReviewCard from "./ReviewCard";
import { Row, Col } from "react-bootstrap";

const ReviewList = ({ reviews }) => {
  console.log(reviews);
  return (
    <Row className="mb-3 px-2">
      <Row className="w-100 pb-2 row-header-box">
        <h2 className="row-header">Reviews</h2>
      </Row>
      <Col md={7} className="mx-auto p-2">
        {reviews && reviews.map((review) => <ReviewCard review={review} />)}
      </Col>
    </Row>
  );
};

export default ReviewList;
