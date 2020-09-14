import React from "react";
import { Container, Row, Col, ListGroup, Nav } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

const UserDashboard = (props) => {
  const { url: currUrl } = props.match;
  const [activeKey, setActiveKey] = React.useState("1");
  console.log(props.location);
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="py-2">
          <ListGroup>
            <Link to={`${currUrl}`}>
              <ListGroup.Item
                active={props.location.pathname == "/profile"}
                action
                DASHBOARD
              ></ListGroup.Item>
            </Link>
            <Link to={`${currUrl}/orders`}>
              <ListGroup.Item
                active={props.location.pathname.includes("/orders")}
                action
              >
                ORDERS
              </ListGroup.Item>
            </Link>
            <Link to={`${currUrl}/edit`}>
              <ListGroup.Item
                active={props.location.pathname.includes("/edit")}
                action
              >
                PROFILE
              </ListGroup.Item>
            </Link>
          </ListGroup>
          {/* <Nav variant="pills" activeKey={activeKey} className="flex-column">
            <Nav.Link as={Link} eventKey="1" onClick={()=>setActiveKey("1")} to={`${currUrl}`}>
              DASHBOARD
            </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to={`${currUrl}/orders`} >
              ORDERS
            </Nav.Link>
            <Nav.Link as={Link} eventKey="3" to={`${currUrl}/edit`}>
              PROFILE
            </Nav.Link>
          </Nav> */}
        </Col>
        <Col style={{ border: "1px solid red", height: 300 }} md={9}>
          <Switch>
            <Route
              exact
              path="/profile/"
              component={(props) => <h1>Dashboard</h1>}
            />
            <Route
              exact
              path="/profile/orders"
              component={(props) => <h1>Orders</h1>}
            />
            <Route
              exact
              path="/profile/edit"
              component={(props) => <h1>Edit profile</h1>}
            />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
