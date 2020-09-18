import React from "react";
import { Image, Col, Row, Button } from "react-bootstrap";
import { mapPlanToText } from "../../../utils/produtUtils";
import { itemPrice } from "../../../utils/cartStats";
import { plans, returnStates, returnStateSetters } from "../../../utils/enums";
import moment from "moment";
import { post } from "../../../utils/requests";
import { ordersApi } from "../../../utils/endpoints";
const OrderItem = ({ item, ...props }) => {
  const returnStatus = returnStates[item.isReturned];
  async function cancelReturn() {
    const cancelConfirmation = window.confirm(
      "are you sure you want to cancel your return. You may not be able to return the book if your plan has expired"
    );
    console.log(cancelConfirmation);
    if (cancelConfirmation) {
      try {
        const [res] = await post(ordersApi.cancelReturn(item.id));
        props.refreshOrders();
        alert(res.message);
      } catch (err) {
        window.alert(err);
      }
    }
  }
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
          <Row style={{ height: "100%" }}>
            <Col md={8}>
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
                {item.plan === plans.SELL
                  ? "N.A."
                  : `₹${item.book.rent.deposit.toFixed(2)}`}
              </p>
              <p className="m-0">
                <b>Return By : </b>
                {item.plan === plans.SELL
                  ? "N.A"
                  : moment(item.returnDate).format("DD-MM-YYYY")}
              </p>
              <p className="m-0">
                <b>Return status : </b>
                {
                  <span
                    className={`font-weight-bold text-${returnStatus.color}`}
                  >
                    {returnStatus.message}
                  </span>
                }
              </p>
            </Col>
            <Col md={4} className="mt-auto mb-auto h-100">
              <Button className="mt-4" block>
                TRACK ORDER
              </Button>
              <Button className="" block>
                DOWNLOAD INVOICE
              </Button>
              {item.isReturned == returnStateSetters.NOT_RETURNED && (
                <Button
                  onClick={() => props.returnBook(item.id)}
                  disabled={new Date(item.returnDate).getTime() < Date.now()}
                  className=""
                  block
                >
                  RETURN
                </Button>
              )}
              {item.isReturned == returnStateSetters.RETURN_REQUESTED && (
                <Button
                  variant="danger"
                  onClick={cancelReturn}
                  className=""
                  block
                >
                  CANCEL RETURN
                </Button>
              )}
              {item.isReturned == returnStateSetters.NOT_RETURNED && (
                <p
                  style={{ fontSize: "14px" }}
                  className="text-danger text-muted m-0 text-right"
                >
                  {timeRemaining(item.returnDate)}
                </p>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

const timeRemaining = (newDate) => {
  const dateDiff = Math.round(
    (new Date(newDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );
  return dateDiff >= 0 ? (
    `Return eligible for ${dateDiff} day(s)`
  ) : (
    <p className="text-danger text-center font-weight-bold">
      return period has expired
    </p>
  );
};

export default OrderItem;
