import React from "react";
import { Card, Col, Row, Button, Image } from "react-bootstrap";
import moment from "moment";
import { getOrderTotal } from "../../Cart/checkoutUtils";
import { mapPlanToText } from "../../../utils/produtUtils";
import { itemPrice } from "../../../utils/cartStats";
import { plans } from "../../../utils/enums";
import OrderItem from "./OrderItem";
const OrderCard = ({ order, ...props }) => {
  return (
    <Card className=" mx-0 my-3">
      <Card.Header className="">
        <Row>
          <Col md={3}>
            <p className="m-0">
              <b>Order #</b> : {order.id.substring(0, 13).toUpperCase()}
            </p>
          </Col>
          <Col md={3}>
            <p className="m-0">
              <b>Order Date : </b>{" "}
              {moment(order.createdAt).format("DD-MMM-YYYY")}
            </p>
          </Col>
          <Col md={3}>
            <p className="m-0">
              <b>Delivery Date: </b> :
              {order.actualDeliveryDate ? (
                moment(order.actualDeliveryDate).format("DD-MMM-YYYY")
              ) : (
                <span>Not Yet Delivered</span>
              )}
            </p>
          </Col>
          <Col md={3}>
            <p className="m-0">
              <b>Grand Total: </b> ₹
              {getOrderTotal(order.items, order.deliveryAmount)}
            </p>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {order.items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </Card.Body>
    </Card>
  );
};
export default OrderCard;
