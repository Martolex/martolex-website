import React from "react";
import "./Cart.scss";
import { Row, Col, Button } from "react-bootstrap";
import RightContainer from "../utils/RightContainer";
import CartItem from "./CartItem";
import { getCart } from "../../redux/actions/CartActions";
import { connect } from "react-redux";
import OverlayLoader from "../utils/OverlayLoader";
import cartStatsCalculator from "../../utils/cartStats";

const Cart = (props) => {
  React.useEffect(() => {
    if (props.isAuth) {
      props.syncCart();
    }
  }, [props.isAuth]);

  const [cartStats, setCartStats] = React.useState({
    totalAmount: 0,
    rentalAmount: 0,
  });
  React.useEffect(() => {
    setCartStats(cartStatsCalculator(props.cart));
  }, [props.cart]);
  console.log(props.cart);
  return (
    <RightContainer close={props.closeCart} title="Cart" isOpen={props.isOpen}>
      {props.cart.map((cartItem) => (
        <CartItem item={{ ...cartItem }} />
      ))}
      {props.isLoading && <OverlayLoader />}

      <div className="details-div">
        <Row className="details-row">
          <span>Amount you pay now:</span>
          <span className="text-primary">Rs.{cartStats.totalAmount}/-</span>
        </Row>
        <Row className="details-row">
          <span>Rental Amount:</span>
          <span className="text-primary">Rs. {cartStats.rentalAmount}/-</span>
        </Row>
        <Row className="details-row">
          <span>Amount refunded:</span>
          <span className="text-primary">
            Rs. {cartStats.totalAmount - cartStats.rentalAmount}/-
          </span>
        </Row>
      </div>
      <Button className="my-3" block>
        CHECKOUT
      </Button>
    </RightContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.user.auth,
  cart: state.cart.items,
  isLoading: state.cart.loading,
});
const mapDispatchToProps = (dispatch) => ({
  syncCart: () => dispatch(getCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
