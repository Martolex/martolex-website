import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const PrivateRoute = ({ isLoggedIn, children, ...rest }) => {
  console.log(isLoggedIn);
  return (
    <Route
      {...rest}
      component={({ location, match }) =>
        isLoggedIn ? (
          React.cloneElement(children, {
            match,
            location,
          })
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { loginError: true },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
