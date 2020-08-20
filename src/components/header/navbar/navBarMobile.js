import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Accordion,
  Card,
} from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import OverLay from "../../utils/overLay";
const NavBarMobile = (props) => {
  return (
    <OverLay
      close={props.closeMenu}
      style={{ padding: 0, display: props.isOpen ? "block" : "none" }}
    >
      <Col style={{ overflowY: "scroll" }} className="bg-light h-100" xs={8}>
        <Row className="p-2">
          <FiArrowLeft size={30} onClick={props.closeMenu} />
        </Row>
        <Row>
          <ListGroup defaultActiveKey="" className="w-100">
            <ListGroup.Item href="/home" action>
              HOME
            </ListGroup.Item>

            <Accordion>
              <Accordion.Toggle as={ListGroup.Item} eventKey="1">
                BOOKS
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <ListGroup>
                  <Accordion>
                    <Accordion.Toggle as={ListGroup.Item} eventKey="1">
                      CATEGORY 1
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <ListGroup>
                        <ListGroup.Item className="pl-5">
                          SUB CATEGORY 1
                        </ListGroup.Item>
                        <ListGroup.Item className="pl-5">
                          SUB CATEGORY 1
                        </ListGroup.Item>
                        <ListGroup.Item className="pl-5">
                          SUB CATEGORY 1
                        </ListGroup.Item>
                        <ListGroup.Item className="pl-5">
                          SUB CATEGORY 1
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Collapse>
                  </Accordion>
                  <ListGroup.Item className="pl-4">CATEGORY 2</ListGroup.Item>
                  <ListGroup.Item className="pl-4">CATEGORY 3</ListGroup.Item>
                  <ListGroup.Item className="pl-4">CATEGORY 4</ListGroup.Item>
                </ListGroup>
              </Accordion.Collapse>
            </Accordion>

            <ListGroup.Item href="/how" action>
              HOW WE WOK
            </ListGroup.Item>

            <ListGroup.Item href="/contactUs" action>
              CONTACT US
            </ListGroup.Item>
            <ListGroup.Item href="/aboutUs" action>
              ABOUT US
            </ListGroup.Item>
            <ListGroup.Item href="/notFound" action>
              DIDN'T FIND YOUR BOOK
            </ListGroup.Item>
            <ListGroup.Item href="/login" action>
              LOGIN / SIGNUP
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Col>
    </OverLay>
  );
};

export default NavBarMobile;
