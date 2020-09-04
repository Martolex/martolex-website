import React from "react";
import { Button } from "react-bootstrap";
import "./QuantityChooser.scss";
const QuantityChooser = (props) => {
  return (
    <div className="qty-chooser">
      <Button variant="danger" className="qty-button decrease">
        -
      </Button>
      <span>1</span>
      <Button variant="success" className="qty-button increase">
        +
      </Button>
    </div>
  );
};

export default QuantityChooser;
