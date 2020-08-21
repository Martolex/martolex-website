import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import "./mobileSearchBar.scss";
import OverLay from "../../utils/overLay";
const MobileSearchbar = (props) => {
  return (
    <OverLay
      style={
        props.isOpen
          ? { visibility: "visible", opacity: 1, top: 0 }
          : { visibility: "hidden", opacity: 0, top: "100vh" }
      }
    >
      <Row className="justify-content-end mr-2">
        <MdClose onClick={props.closeSearch} size={40} color="white" />
      </Row>
      <Row className=" mb-3 mx-1">
        <Form.Control
          type="text"
          size="lg"
          placeholder="Search by Book Name, Author, ISBN, Publication"
        />
      </Row>
      <Row className="mx-1">
        <Button
          block
          onClick={props.closeSearch}
          size="lg"
          style={{ fontSize: "0.9em" }}
          className="text-light"
        >
          SEARCH
        </Button>
      </Row>
    </OverLay>
  );
};

export default MobileSearchbar;
