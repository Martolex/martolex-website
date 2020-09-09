import React from "react";
import "./Cart.scss";
import { Row, Col, Button } from "react-bootstrap";
import RightContainer from "../utils/RightContainer";
import CartItem from "./CartItem";
import { getCart } from "../../redux/actions/CartActions";
import { connect } from "react-redux";

const Cart = (props) => {
  React.useEffect(() => {
    props.syncCart();
  }, []);
  return (
    <RightContainer close={props.closeCart} title="Cart" isOpen={props.isOpen}>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <div className="details-div">
        <Row className="details-row">
          <span>Amount you pay now:</span>
          <span className="text-primary">Rs.780/-</span>
        </Row>
        <Row className="details-row">
          <span>Rental Amount:</span>
          <span className="text-primary">Rs. 780/-</span>
        </Row>
        <Row className="details-row">
          <span>Amount refunded:</span>
          <span className="text-primary">Rs. 780/-</span>
        </Row>
      </div>
      <Button className="my-3" block>
        CHECKOUT
      </Button>
    </RightContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  syncCart: () => dispatch(getCart()),
});
export default connect(null, mapDispatchToProps)(Cart);
