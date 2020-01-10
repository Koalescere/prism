import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "../Selects.css";

const Pricerange = props => {
  return (
    <FormGroup>
      <Label for="exampleSelect" className="selectlabel">
        Price Range
      </Label>
      <Input
        type="select"
        className="Selex"
        bsSize="sm"
        name="select"
        id="exampleSelect"
        placeholder="sm"
      >
        <option className="Selex">$300,000 - $400,000</option>
        <option className="Selex">$400,000 - $500,000</option>
        <option className="Selex">$500,000 - $600,000</option>
        <option className="Selex">$600,000 - $700,000</option>
        <option className="Selex">$700,000 - $800,000</option>
        <option className="Selex">$800,000 - $900,000</option>
        <option className="Selex">$1,000,000 - $1,250,000</option>
        <option className="Selex">$1,250,000 - $1,500,000</option>
        <option className="Selex">$1,500,000 - $2,000,000</option>
        <option className="Selex">$2,000,000 - $3,000,000</option>
        <option className="Selex">$3,000,000 - $5,000,000</option>
        <option className="Selex">$5,000,000 - $10,000,000</option>
        <option className="Selex">$10,000,000 - $20,000,000</option>
      </Input>
    </FormGroup>
  );
};

export default Pricerange;
