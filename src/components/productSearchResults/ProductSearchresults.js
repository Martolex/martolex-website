import React from "react";
import "./ProductSearchResults.scss";
import { Container, Col, Row, ListGroup, Card } from "react-bootstrap";
import ProductListing from "../productListing/productListing";
import {
  BsGrid3X3GapFill,
  BsList,
  BsChevronBarLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronBarRight,
} from "react-icons/bs";
const ProductSearchResults = (props) => {
  return (
    <Container fluid>
      <Row className="pt-3 pb-5">
        <Col md={3}>
          <Card style={{ border: "none" }}>
            <Card.Header
              style={{ borderRadius: "2px" }}
              className="text-center bg-primary text-dark font-weight-bold"
            >
              FILTER BY SUB-CATEGORY
            </Card.Header>
            <ListGroup className="side-filter" variant="flush">
              <ListGroup.Item action>JEE</ListGroup.Item>
              <ListGroup.Item active action>
                GATE
              </ListGroup.Item>
              <ListGroup.Item action>NEET</ListGroup.Item>
            </ListGroup>
            <Card.Footer
              as="button"
              style={{ borderRadius: "2px" }}
              className="btn  bg-primary text-dark font-weight-bold"
            >
              {"VIEW ALL BOOKS >"}{" "}
            </Card.Footer>
          </Card>
        </Col>
        <Col md={9} className="px-4">
          <Row className="w-100 mb-4" className="pagination-selector">
            <Col md={2} className="text-dark">
              <BsGrid3X3GapFill className="mr-1 buttons" size={20} />
              <BsList className="mr-1 buttons" size={25} />
            </Col>
            <Col md={10} className="pagination-header">
              Showing 1 to 6 (1 Pages)
            </Col>
          </Row>
          <ProductListing />
          <Row className="pagination justify-content-center mt-3 p-0">
            <Col md={3} className="p-0 m-0">
              <Row className="p-0 m-0">
                <Col className="button">
                  <BsChevronBarLeft size={25} />
                </Col>
                <Col className="button">
                  <BsChevronLeft size={20} />
                </Col>
                <Col className="button pageNum">
                  <span style={{ fontSize: "1.3em" }}>1</span>
                </Col>
                <Col className="button m-0">
                  <BsChevronRight size={20} />
                </Col>
                <Col className="button">
                  <BsChevronBarRight size={25} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSearchResults;
