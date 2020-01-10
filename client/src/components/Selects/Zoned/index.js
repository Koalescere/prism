import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "../Selects.css";

const Zoned = props => {
  return (
    <FormGroup>
      <Label for="exampleSelect" className="selectlabel">
        Zoning
      </Label>
      <Input
        type="select"
        className="Selex"
        bsSize="sm"
        name="select"
        id="exampleSelect"
        placeholder="sm"
      >
        <option className="Selex">1</option>
        <option className="Selex">2</option>
        <option className="Selex">3</option>
        <option className="Selex">4</option>
        <option className="Selex">5</option>
      </Input>
    </FormGroup>
  );
};

export default Zoned;
