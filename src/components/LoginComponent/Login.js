import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import { Container, Col, Row, Form, Button, Spinner } from "react-bootstrap";
import OverLay from "../utils/overLay";
import "./Login.scss";
import RightContainer from "../utils/RightContainer";
const Login = (props) => {
  const [validated, setValidated] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setLoading(true);
    }
    setValidated(true);
  };

  return (
    <RightContainer
      title="Login / SignUp "
      isOpen={props.isOpen}
      close={props.closeLogin}
    >
      <Form
        className="p-3"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="validationCustom01">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            required
            type="tel"
            minLength={10}
            pattern="[987][0-9]+"
            maxLength={10}
            placeholder="enter your registered mobile "
          />

          <Form.Control.Feedback type="invalid">
            Enter valid Mobile number
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom01">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="enter your password "
          />

          <Form.Control.Feedback type="invalid">
            Enter valid Mobile number
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="text-light" block type="submit">
          LOGIN
        </Button>
      </Form>

      {isLoading && (
        <Container className="loading-container">
          <Spinner animation="border" variant="primary" />
        </Container>
      )}
    </RightContainer>
  );
};

export default Login;
