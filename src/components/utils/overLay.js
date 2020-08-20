import React from "react";
import { Container } from "react-bootstrap";
import "./overlay.scss";
const OverLay = (props) => (
  <Container
    onClick={props.close}
    style={{ ...props.style }}
    className="overlay"
  >
    {props.children}
  </Container>
);
export default OverLay;
