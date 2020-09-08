import React from "react";
import OverLay from "./overLay";
import "./overlayLoader.scss";
import { Container, Spinner } from "react-bootstrap";
const overlayLoader = (props) => {
  return (
    <Container className="loading-container">
      <Spinner animation="border" variant="primary" />
    </Container>
  );
};
export default overlayLoader;
