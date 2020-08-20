import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { MdClose } from "react-icons/md";
import "./mobileSearchBar.scss";
import OverLay from "../../utils/overLay";
const MobileSearchbar = (props) => {
  return (
    <OverLay style={{ display: props.isOpen ? "block" : "none" }}>
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
        <Button block size="lg" className="text-light">
          SEARCH
        </Button>
      </Row>
    </OverLay>
  );
};

export default MobileSearchbar;
