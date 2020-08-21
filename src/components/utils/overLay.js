import React from "react";
import { Container } from "react-bootstrap";
import "./overlay.scss";
import { animations } from "react-animation";

const OverLay = (props) => (
  <Container fluid style={props.style} className="overlay">
    {props.children}
  </Container>
);
export default OverLay;
