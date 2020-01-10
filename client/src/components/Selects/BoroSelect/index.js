import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../Selects.css";

const BoroSelect = props => {
  return (
    <div>
      <FormGroup>
        <Label for="exampleSelect" className="selectlabel">
          Borough
        </Label>
        <Input
          type="select"
          className="Selex"
          // name="select"
          bsSize="sm"
          id="exampleSelect"
          placeholder="sm"
        >
          <option className="Selex">Manhattan</option>
          <option className="Selex">Bronx</option>
          <option className="Selex">Brooklyn</option>
          <option className="Selex">Queens</option>
          <option className="Selex">Staten Island</option>
        </Input>
      </FormGroup>
    </div>
  );
};

export default BoroSelect;
