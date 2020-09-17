import React from "react";
import { Container, Row, Col, ListGroup, Nav } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import DashboardHome from "./DashBoardHome";
import UserOrders from "./Orders/UserOrders";
import PrivateRoute from "../utils/PrivateRoute";
const UserDashboard = (props) => {
  const { url: currUrl } = props.match;
  const [activeKey, setActiveKey] = React.useState("1");
  console.log(props.location);
  return (
    <Container fluid>
      <Row className="px-2">
        <Col md={3} className="py-2">
          <ListGroup>
            <Link to={`${currUrl}`}>
              <ListGroup.Item
                active={props.location.pathname == "/profile"}
                action
              >
                DASHBOARD
              </ListGroup.Item>
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
            <Link to={`/`}>
              <ListGroup.Item
                action
                onClick={() => {
                  props.userLogout();
                }}
              >
                LOGOUT
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </Col>
        <Col className="mx-2 my-2" style={{ border: "1px solid #eee" }}>
          <Switch>
            <PrivateRoute exact path="/profile/">
              <DashboardHome />
            </PrivateRoute>
            <PrivateRoute exact path="/profile/orders">
              <UserOrders />
            </PrivateRoute>
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
const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(logout()),
});
export default connect(null, mapDispatchToProps)(UserDashboard);
