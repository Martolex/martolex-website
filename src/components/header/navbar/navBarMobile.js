import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Accordion,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import OverLay from "../../utils/overLay";
import { connect } from "react-redux";
import { buildSubCatUrl, buildCatUrl } from "../../../utils/buildUrl";
const NavBarMobile = ({ categories, ...props }) => {
  const animation = props.isOpen
    ? { visibility: "visible", opacity: 1 }
    : { visibility: "hidden", opacity: 0 };

  const menuAnimation = props.isOpen
    ? { visibility: "visible", left: 0 }
    : { visibility: "hidden", left: -500 };
  return (
    <OverLay close={props.closeMenu} style={{ padding: 0, ...animation }}>
      <Col
        style={{
          overflowY: "scroll",
          transition: "all 500ms ease",
          position: "absolute",
          ...menuAnimation,
        }}
        className="bg-light h-100"
        xs={8}
      >
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
                  {categories.map((category) =>
                    category.subcategories.length > 0 ? (
                      <Accordion key={category.id}>
                        <Accordion.Toggle as={ListGroup.Item} eventKey="1">
                          {category.name.toUpperCase()}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <ListGroup>
                            {category.subcategories.map((subcategory) => (
                              <Link
                                to={buildSubCatUrl(category.id, subcategory.id)}
                                className="text-dark btn-link"
                                key={subcategory.id}
                              >
                                <ListGroup.Item
                                  className="text-dark"
                                  className="pl-5"
                                >
                                  {subcategory.name.toUpperCase()}
                                </ListGroup.Item>
                              </Link>
                            ))}
                          </ListGroup>
                        </Accordion.Collapse>
                      </Accordion>
                    ) : (
                      <Link
                        to={buildCatUrl(category.id)}
                        className="text-dark btn-link"
                      >
                        <ListGroup.Item className="pl-4">
                          {category.name.toUpperCase()}
                        </ListGroup.Item>
                      </Link>
                    )
                  )}
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
          </ListGroup>
        </Row>
      </Col>
    </OverLay>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(NavBarMobile);
