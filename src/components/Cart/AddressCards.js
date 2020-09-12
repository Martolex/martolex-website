import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import "./addressCards.scss";
const AddressCards = (props) => {
  const [activecard, setActiveCard] = React.useState(undefined);
  const cards = [1, 2, 3, 4];
  const onCardSelect = (id) => () => {
    setActiveCard(id);
    props.handleAddressSelectError();
    props.onSelect(id);
  };
  return (
    <div>
      <Row className="address-cards">
        {props.addressError && (
          <p className="text-danger">Please select an address</p>
        )}
        {props.addresses.map((card, idx) => {
          return (
            <Col className="py-2 address-card-container" style={{}} md={6}>
              <Row className="w-100 m-0 h-100">
                <Col
                  className={`px-3 py-2 address-card ${
                    card == activecard ? "active" : ""
                  } `}
                  onClick={onCardSelect(card)}
                >
                  <Row>
                    <Col md={10} xs={10}>
                      <h4>Deepanshu Vangani</h4>
                    </Col>
                    <Col md={2} xs={2} className="btn-dark-ripple text-right">
                      <MdEdit size={20} onClick={() => console.log("click")} />
                    </Col>
                  </Row>
                  <p>A-1001, Prajapati Gaurav,</p>
                  <p>Plot no-3, sector-2 , kharghar</p>
                  <p>Navi Mumbai,</p>
                  <p>Maharashtra - 410210,</p>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
      <Row className="mt-2">
        <Col md={5} className="mx-auto">
          <Button onClick={props.addNewAddress} size="lg" block>
            ADD NEW ADDRESS
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddressCards;
