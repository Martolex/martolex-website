import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./checkoutScreen.scss";
import { connect } from "react-redux";
import cartStats from "../../utils/cartStats";
import {
  mapPlanToText,
  getDeliveryDate,
  getDeliveryCost,
} from "./checkoutUtils";

const CheckoutScreen = ({ cart, ...props }) => {
  const checkoutStats = cartStats(cart);
  const deliveryCharges = getDeliveryCost();
  return (
    <Container className="checkout-page" fluid className="p-0">
      <Row className="w-100 m-0 bg-dark text-white">
        <Col>
          <h1 className="text-white text-center font-weight-light">CHECKOUT</h1>
        </Col>
      </Row>
      <Row className="px-2 w-100 m-0 my-3 checkout-page">
        <Col md={{ span: 7 }} className="shipping h-50">
          <Row>
            <Col>
              <h1 className="text-dark">BILLING / SHIPPING ADDRESS</h1>
              <hr />
            </Col>
          </Row>
          <Row>
            <Form className="w-100 p-2">
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group controlId="full-name">
                    <Form.Label>Full Name*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      onChange={(event) => {}}
                      placeholder="full Name"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="Mobile-Number">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      required
                      type="tel"
                      minLength={10}
                      maxLength={10}
                      onChange={(event) => {}}
                      placeholder="Mobile Number"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="address-line1">
                    <Form.Label>Address line 1*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      onChange={(event) => {}}
                      placeholder="Address line 1"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="address-line2">
                    <Form.Label>Address line 2*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      onChange={(event) => {}}
                      placeholder="Address line 2"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group controlId="town">
                    <Form.Label>town / city*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      onChange={(event) => {}}
                      placeholder="Town / city"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="state">
                    <Form.Label>State*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      onChange={(event) => {}}
                      placeholder="state"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group controlId="pincode">
                    <Form.Label>PIN Code*</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      maxLength={6}
                      pattern="[1-9][0-9]+"
                      onChange={(event) => {}}
                      placeholder="PIN Code"
                    />
                  </Form.Group>
                </Col>
                <Col>
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
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="order-notes">
                    <Form.Label>Order notes</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Row>
        </Col>
        <Col md={{ span: 5 }} className="order-details bg-light mt-3 pt-2 ">
          <Row>
            <Col>
              <h3 className="text-center">YOUR ORDER</h3>
              <hr />
            </Col>
          </Row>
          <Row className="headers">
            <Col xs={9} md={9}>
              PRODUCT
            </Col>
            <Col className="total" xs={3} md={3}>
              TOTAL
            </Col>
          </Row>
          {cart.map((cartItem) => (
            <Row className="item" key={cartItem.BookId}>
              <Col xs={9} md={9}>
                <p className="text-primary">
                  {cartItem.book.name} X {cartItem.qty}
                </p>
                <p className="text-primary">{`[ ${mapPlanToText(
                  cartItem.plan
                )} = ₹ ${cartItem.book.rent[cartItem.plan]}]`}</p>
              </Col>
              <Col className="total" xs={3} md={3}>
                &#8377;
                {` ${
                  (cartItem.book.rent[cartItem.plan] +
                    cartItem.book.rent.deposit) *
                  cartItem.qty
                }/-`}
              </Col>
            </Row>
          ))}

          <hr />

          <Row className="">
            <Col xs={9} md={9}>
              <b>Total Rental Amount</b>
            </Col>
            <Col className="total" xs={3} md={3}>
              &#8377; {`${checkoutStats.rentalAmount}/-`}
            </Col>
          </Row>
          <hr />
          <Row className="">
            <Col xs={9} md={9}>
              <b>Amount You pay now</b>
            </Col>
            <Col className="total" xs={3} md={3}>
              &#8377; {`${checkoutStats.totalAmount}/-`}
            </Col>
          </Row>
          <hr />
          <Row className="">
            <Col xs={9} md={9}>
              <b>Amount Amount Refunded On Return of Books</b>
            </Col>
            <Col className="total" xs={3} md={3}>
              &#8377;{" "}
              {`${checkoutStats.totalAmount - checkoutStats.rentalAmount}/-`}
            </Col>
          </Row>
          <hr />
          <Row className="">
            <Col xs={6} md={8}>
              <b>TOTAL SAVINGS</b>
            </Col>
            <Col className="total" xs={6} md={4}>
              <div className="bg-success text-center text-light font-weight-bold p-2">
                &#8377;{" "}
                {`${checkoutStats.totalMrp - checkoutStats.rentalAmount}/- (${(
                  ((checkoutStats.totalMrp - checkoutStats.rentalAmount) /
                    checkoutStats.totalMrp) *
                  100
                ).toFixed(2)})%`}
              </div>
            </Col>
          </Row>
          <hr />

          <Row className="mb-3">
            <Col>SHIPPING</Col>
          </Row>
          <Row className="mb-1">
            <Col xs={7} md={8}>
              <b>Delivery Shipping</b>
            </Col>
            <Col xs={5} md={4}>
              {`${
                deliveryCharges.forward != 0
                  ? "₹ " + deliveryCharges.forward + "/-"
                  : " Free Delivery"
              }`}
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xs={7} md={8}>
              <b>Return Shipping</b>
            </Col>
            <Col xs={5} md={4}>
              {`${
                deliveryCharges.return != 0
                  ? "₹ " + deliveryCharges.return + "/-"
                  : " Free Delivery"
              }`}
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xs={7} md={8}>
              <b>Expected Delivery</b>
            </Col>
            <Col xs={5} md={4}>
              {getDeliveryDate()}
            </Col>
          </Row>

          <hr />
          <Row className="item">
            <Col xs={7} md={9}>
              <h4>Grand Total</h4>
            </Col>
            <Col className="total" xs={5} md={3}>
              <h4>
                &#8377;{" "}
                {checkoutStats.totalAmount +
                  deliveryCharges.forward +
                  deliveryCharges.return}
                /-
              </h4>
            </Col>
          </Row>

          <hr />

          <Form className="w-100">
            <Form.Group controlId="terms accept">
              <Row>
                <Col xs={1} sm={1} md={1}>
                  <Form.Check type="checkbox" required />
                </Col>
                <Col>
                  I have read and accept the <a href="#">Rental policy</a> along
                  with the <a href="#">Damage policy</a>
                </Col>
              </Row>
              <hr />

              <Row className="py-2">
                <Col>
                  <Button variant="primary" block size="lg">
                    SECURE ONLINE PAYMENT
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="primary" block size="lg">
                    CASH ON DELIVERY
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart.items });
export default connect(mapStateToProps)(CheckoutScreen);
