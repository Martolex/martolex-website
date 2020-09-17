import React from "react";
import { Image, Col, Row, Button } from "react-bootstrap";
import { mapPlanToText } from "../../../utils/produtUtils";
import { itemPrice } from "../../../utils/cartStats";
import { plans } from "../../../utils/enums";
import moment from "moment";
const OrderItem = ({ item }) => {
  return (
    <div>
      <Row>
        <Col className="text-center" md={2}>
          <Image
            src={item.book.images[0]?.url || `/book1.png`}
            className="book-img"
          />
        </Col>
        <Col style={{ height: "100%" }} md={10}>
          <Row>
            <Col md={7}>
              <p className="mb-3">
                <b>{item.book.name}</b>
              </p>
              <p className="m-0">
                <b>Plan :</b> {mapPlanToText(item.plan)}
              </p>
              <p className="m-0">
                <b>Amount paid : </b>₹ {itemPrice(item).toFixed(2)}
              </p>
              <p className="m-0">
                <b>Refundable amount: </b>
                {item.plan === plans.SELL ? "N.A." : item.book.rent.deposit}
              </p>
              <p className="m-0">
                <b>Return By : </b>
                {item.plan === plans.SELL
                  ? "N.A"
                  : moment(item.returnDate).format("DD-MM-YYYY")}
              </p>
            </Col>
            <Col md={5} className="my-auto h-100">
              <Button className="mt-2" block>
                RETURN
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default OrderItem;
