import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import { Container, Col, Row, Form, Button, Spinner } from "react-bootstrap";
import OverLay from "../utils/overLay";
import "./Login.scss";
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
        className="bg-white h-100 login-container"
        md={3}
        sm={4}
        xs={9}
      >
        <div onClick={props.closeLogin} className="back-arrow">
          <FiArrowRight size={30} color="white" />
        </div>

        <div className="login-label text-light">Login / SignUp</div>

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
      </Col>
    </OverLay>
  );
};

export default Login;
