import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router";
import DamagePolicy from "./DamagePolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import RentalPolicy from "./RentalPolicy";
import TermsAndConditions from "./TermsAndConditions";

const StaticRouter = (props) => {
  console.log("abcd");
  return (
    // <Container fluid>
    <Switch>
      <Route
        exact
        path="/static/terms_conditions"
        component={TermsAndConditions}
      />
      <Route exact path="/static/Privacy_policy" component={PrivacyPolicy} />
      <Route exact path="/static/Damage_policy" component={DamagePolicy} />
      <Route exact path="/static/Rental_policy" component={RentalPolicy} />
    </Switch>
    // </Container>
  );
};

export default StaticRouter;
