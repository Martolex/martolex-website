import React from "react";
import "./bottomNavBarMobile.scss";
import { Container, Col, Row } from "react-bootstrap";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
const BottomNavbarMobile = (props) => {
  return (
    <Container fluid className="bottom-navbar">
      <Row>
        <Col className="justify-content-center" sm={3} xs={3}>
          <AiOutlineHome size={25} />
          <p>Home</p>
        </Col>
        <Col className="justify-content-center" sm={3} xs={3}>
          <FaRegHeart size={25} />
          <p>Wislist</p>
        </Col>
        <Col
          className="justify-content-center"
          xs={3}
          sm={3}
          onClick={props.isLoggedIn ? props.openCart : props.openLogin}
        >
          <FiShoppingCart size={25} />
          <p>Cart</p>
        </Col>
        <Col
          onClick={() =>
            props.isLoggedIn ? props.openDashBoard() : props.openLogin()
          }
          className="justify-content-center"
          xs={3}
          sm={3}
        >
          <AiOutlineUser size={25} />
          <p>Account</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomNavbarMobile;
