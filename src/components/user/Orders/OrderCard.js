import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import moment from "moment";
import { getOrderTotal } from "../../Cart/checkoutUtils";
import OrderItem from "./OrderItem";
const OrderCard = ({ order, ...props }) => {
  return (
    <Card className=" mx-0 my-3">
      <Card.Header className="">
        <Row>
          <Col md={3}>
            <p className="m-0">
              <b>Order #</b> :
            </p>
            <p className="m-0">{order.id.substring(0, 23).toUpperCase()}</p>
          </Col>
          <Col md={3}>
            <p className="m-0">
              <b>Order Date : </b>
            </p>
            <p className="m-0">
              {moment(order.createdAt).format("Do MMMM, YYYY")}
            </p>
          </Col>
          <Col md={3}>
            <p className="m-0">
              <b>Delivery Date: </b> :
            </p>
            <p className="m-0">
              {order.actualDeliveryDate ? (
                moment(order.actualDeliveryDate).format("DD-MMM-YYYY")
              ) : (
                <span>Not Yet Delivered</span>
              )}
            </p>
          </Col>
          <Col md={3}>
            <p className="m-0">
              <b>Grand Total: </b>
            </p>
            <p className="m-0">
              ₹{getOrderTotal(order.items, order.deliveryAmount)}
            </p>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {order.items.map((item) => (
          <OrderItem
            key={item.id}
            item={item}
            refreshOrders={props.refreshOrders}
            returnBook={(itemId) => props.returnBook(itemId)}
          />
        ))}
      </Card.Body>
    </Card>
  );
};
export default OrderCard;
