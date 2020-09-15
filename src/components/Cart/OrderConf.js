import React from "react";
import { Container, Row, Col, Card, Image, Table } from "react-bootstrap";
import "./orderConf.scss";
import { get } from "../../utils/requests";
import { ordersApi } from "../../utils/endpoints";
import OverLay from "../utils/overLay";
import OverlayLoader from "../utils/OverlayLoader";
import {
  convertDate,
  getOrderTotal,
  formatDeliveryDate,
  mapPlanToText,
} from "./checkoutUtils";
const OrderConf = (props) => {
  const [order, setOrder] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);
  React.useEffect(() => {
    async function getOrderDetails() {
      setLoading(true);
      try {
        const [orderDet] = await get(
          ordersApi.orderDetails(props.match.params.orderId)
        );
        setOrder(orderDet);
        console.log(orderDet);
      } catch (err) {
        console.error(err);
        alert(
          "something went wrong while fetching order details. But your order has been placed"
        );
      }
      setLoading(false);
    }
    getOrderDetails();
  }, []);
  return (
    <Container className="py-3">
      {isLoading && (
        <OverLay style={{ position: "fixed", left: 0 }}>
          <OverlayLoader style={{ top: "45vh" }} />
        </OverLay>
      )}
      <Row>
        <Col>
          <h1 className="text-dark text-center font-weight-bold">Thank You!</h1>
        </Col>
      </Row>
      <Row>
        <Row className="w-100">
          <Col className="text-center">
            <Image height={40} width={40} src="/check.svg" />
          </Col>
        </Row>
        <Col>
          <h3 className="text-dark text-center font-weight-light my-3">
            Your Order Has Been Received.
          </h3>
        </Col>
      </Row>

      <Row className="">
        <Col md={1}></Col>
        <Col md={10}>
          <Row>
            <Col xs={12} md={6}>
              <Card style={{ height: "100%" }} classname="h-100">
                <Card.Header>
                  <b>ORDER SUMMARY</b>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col xs={4} md={4}>
                      <b>Order #:</b>
                    </Col>
                    <Col>{props.match.params.orderId}</Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4}>
                      <b>Order Date:</b>
                    </Col>
                    <Col>{convertDate(order.createdAt)}</Col>
                  </Row>

                  <Row>
                    <Col xs={4} md={4}>
                      <b>Order Total:</b>
                    </Col>
                    <Col>₹ {getOrderTotal(order.items)}</Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4}>
                      <b>Delivery Date: </b>
                    </Col>
                    <Col>
                      {formatDeliveryDate(
                        order.deliveryMinDate,
                        order.deliveryMaxDate
                      )}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>
                  <b>SHIPPING DETAILS</b>
                </Card.Header>
                <Card.Body>
                  <p className="m-0">
                    <b>{order.address?.name}</b>
                  </p>
                  <p className="m-0">{order.address?.line1}</p>
                  <p className="m-0">{order.address?.line2}</p>
                  <p className="m-0">{order.address?.city}</p>
                  <p className="m-0">{`${order.address?.state || ""} - ${
                    order.address?.zip || ""
                  }`}</p>
                  <p className="m-0">
                    <b>Mobile: </b>
                    {order.address?.phoneNo}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className>
            <Col>
              <h3 className="text-dark   my-3 mb-0">Order details</h3>
            </Col>
          </Row>
          {order.items?.map((item) => (
            <Row key={item.BookId}>
              <Col className="mx-auto" md={7}>
                <Card className="p-3 my-3">
                  <Row>
                    <Col xs={4} md={5}>
                      <Image
                        src={`${item.book?.images[0].url || " /book1.png"}`}
                        className="book-img"
                      />
                    </Col>
                    <Col xs={8}>
                      <p className="mb-3">
                        <b>{item.book.name}</b>
                      </p>
                      <p className="m-0">
                        <b>Plan :</b> {mapPlanToText(item.plan)}
                      </p>
                      <p className="m-0">
                        <b>Rent : </b>₹ {item.book.rent[item.plan]?.toFixed(2)}
                      </p>
                      <p className="m-0">
                        <b>Refundable deposit : </b>₹{" "}
                        {item.book.rent["deposit"]?.toFixed(2)}
                      </p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          ))}
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
};

export default OrderConf;
