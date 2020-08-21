import React from "react";

import "./rightContainer.scss";

import { Col, Row } from "react-bootstrap";
import OverLay from "./overLay";
import { FiArrowRight } from "react-icons/fi";

const RightContainer = (props) => {
  const animation = props.isOpen
    ? { visibility: "visible", opacity: 1 }
    : { visibility: "hidden", opacity: 0 };

  const menuAnimation = props.isOpen
    ? { visibility: "visible", right: 0 }
    : { visibility: "hidden", right: -500 };
  return (
    <OverLay style={animation}>
      <Col
        style={menuAnimation}
        className="bg-white h-100 right-container"
        md={3}
        sm={4}
        xs={9}
      >
        <Row onClick={props.close} className="back-arrow">
          <FiArrowRight size={30} color="white" />
        </Row>

        <Row className="top-label text-light">{props.title}</Row>
        {props.children}
      </Col>
    </OverLay>
  );
};
export default RightContainer;
