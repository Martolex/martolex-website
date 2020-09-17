import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./Dashboardstyles.scss";
const DashboardHome = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-dark font-weight-normal pt-4">DashBoard</h2>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text">
            Hello, <b>Deepanshu</b>
          </p>
          <p>
            From your account dashboard. you can easily check & view your recent
            orders, manage your shipping and billing addresses and edit your
            password and account details.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardHome;
