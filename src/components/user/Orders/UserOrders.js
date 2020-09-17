import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import Overlay from "../../utils/overLay";
import OverLayLoader from "../../utils/OverlayLoader";
import { get } from "../../../utils/requests";
import { ordersApi } from "../../../utils/endpoints";
import moment from "moment";
import { formatDeliveryDate, getOrderTotal } from "../../Cart/checkoutUtils";
import { mapPlanToText } from "../../../utils/produtUtils";
import { itemPrice } from "../../../utils/cartStats";
import { plans } from "../../../utils/enums";
import OrderCard from "./OrderCard";
const UserOrders = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  React.useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const [userOrders] = await get(ordersApi.getOrders, true);
        setOrders(userOrders);
        setLoading(false);
      } catch (err) {
        console.log(err);
        alert("Something went wrong");
      }
    }
    getData();
  }, []);
  return (
    <Container>
      {isLoading && (
        <Overlay style={{ position: "fixed", top: 0, left: 0 }}>
          <OverLayLoader />
        </Overlay>
      )}
      <Row>
        <Col>
          <h2 className="text-dark font-weight-normal pt-4">Orders</h2>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col className="p-0">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default UserOrders;
