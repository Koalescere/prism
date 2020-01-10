import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "../Selects.css";

const YearSelect = props => {
  return (
    <div>
      <FormGroup>
        <Label for="exampleSelect" className="selectlabel">
          Sale Year
        </Label>
        <Input
          type="select"
          className="Selex"
          // name="select"
          bsSize="sm"
          id="exampleSelect"
          placeholder="sm"
        >
          <option className="Selex">2019</option>
          <option className="Selex">2018</option>
          <option className="Selex">2017</option>
          <option className="Selex">2016</option>
          <option className="Selex">2015</option>
          <option className="Selex">2014</option>
          <option className="Selex">2013</option>
          <option className="Selex">2012</option>
          <option className="Selex">2011</option>
          <option className="Selex">2010</option>
          <option className="Selex">2009</option>
          <option className="Selex">2008</option>
          <option className="Selex">2007</option>
          <option className="Selex">2006</option>
          <option className="Selex">2005</option>
        </Input>
      </FormGroup>
    </div>
  );
};

export default YearSelect;
