import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import "./signUp.scss";
const SignUp = (props) => {
  return (
    <Container className="parent-container">
      <Row className="container-row">
        <Col className="signup-containers left" md={6}>
          <Image src="/reading-corner-colour.svg" width={"90%"} />
        </Col>
        <Col className="signup-containers right" md={6}>
          <Container>
            <Row>
              <h1>Sign Up </h1>
            </Row>
            <Row>
              <Form>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="first-name">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        onChange={(event) => {}}
                        placeholder="First Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="last-name">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        onChange={(event) => {}}
                        placeholder="Last Name"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email ID</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        onChange={(event) => {}}
                        placeholder="Email ID"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="Mobile-Number">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        onChange={(event) => {}}
                        placeholder="Mobile Number"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} xs={12}>
                    <Form.Group md={6} controlId="password">
                      <Form.Label>password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        onChange={(event) => {}}
                        placeholder="password"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="conf-password">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        onChange={(event) => {}}
                        placeholder="Confirm Password"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="dark" block>
                      SIGN UP
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
