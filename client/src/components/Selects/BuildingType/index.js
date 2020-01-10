import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "../Selects.css";

const BuildingType = props => {
  return (
    <FormGroup>
      <Label for="exampleSelect" className="selectlabel">
        Building Type
      </Label>
      <Input
        type="select"
        className="Selex"
        bsSize="sm"
        name="select"
        id="exampleSelect"
        placeholder="sm"
      >
        <option>ONE FAMILY DWELLINGS</option>
        <option>TWO FAMILY DWELLINGS</option>
        <option>THREE FAMILY DWELLINGS</option>
        <option>TAX CLASS 1 CONDOS</option>
        <option>RENTALS - WALKUP APARTMENTS</option>
        <option>RENTALS - ELEVATOR APARTMENTS</option>
        <option>COOPS - WALKUP APARTMENTS</option>
        <option>COOPS - ELEVATOR APARTMENT</option>
        <option>CONDO-RENTALS</option>
        <option>CONDOS - WALKUP APARTMENTS</option>
        <option>CONDOS - ELEVATOR APARTMENTS</option>
        <option>RENTALS - 4-10 UNIT</option>
        <option>CONDOS - 2-10 UNIT RESIDENTIAL</option>
        <option>CONDOS - 2-10 UNIT WITH COMMERCIAL UNIT</option>
        <option>CONDO COOPS</option>
        <option>OFFICE BUILDINGS</option>
        <option>STORE BUILDINGS</option>
        <option>LOFT BUILDINGS</option>
        <option>LUXURY HOTELS</option>
        <option>OTHER HOTELS</option>
        <option>FACTORIES</option>
        <option>COMMERCIAL CONDOS</option>
        <option>COMMERCIAL GARAGES</option>
        <option>WAREHOUSES</option>
        <option>COMMERCIAL VACANT LAND</option>
        <option>HOSPITAL AND HEALTH FACILITIES</option>
        <option>EDUCATIONAL FACILITIES</option>
        <option>INDOOR PUBLIC AND CULTURAL FACILITIES</option>
        <option>OUTDOOR RECREATIONAL FACILITIES</option>
        <option>RELIGIOUS FACILITIES</option>
        <option>ASYLUMS AND HOMES</option>
        <option>TAX CLASS 4 - OTHER</option>
        <option>CONDO CULTURAL/MEDICAL/EDUCATIONAL/ETC</option>
        <option>CONDO OFFICE BUILDINGS</option>
        <option>CONDO PARKING</option>
        <option>CONDO HOTELS</option>
        <option>CONDO STORE BUILDINGS</option>
        <option>CONDO NON-BUSINESS STORAGE</option>
        <option>CONDO TERRACES/GARDENS/CABANAS</option>
        <option>CONDO WAREHOUSES/FACTORY/INDUS</option>
      </Input>
    </FormGroup>
  );
};

export default BuildingType;
