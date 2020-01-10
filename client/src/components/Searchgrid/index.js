import React from "react";
import { Button, Row, Col, container } from "reactstrap";
import Pricerange from "../Selects/Pricerange";
import BoroSelect from "../Selects/BoroSelect";
import BuildingType from "../Selects/BuildingType";
import Zoned from "../Selects/Zoned";
import YearSelect from "../Selects/Year";
import "../SearchCollapse/Collapse.css";

const Searchgrid = props => {
  return (
    <div>
      <container>
        <row>
          {/* price label and component */}
          <col xs="auto">
            <p className="labelz">PRICE</p>
          </col>
          <col xs="auto">
            <Pricerange />
          </col>
          {/* boro label and component */}
          <col xs="auto">
            <p className="labelz">BOROUGH</p>
          </col>
          <col xs="auto">
            <BoroSelect />
          </col>
          {/* building type label and component */}
          <col xs="auto">
            <p className="labelz">BUILDING TYPE</p>
          </col>
          <col xs="auto">
            <BuildingType />
          </col>
          {/* zoning label and component */}
          <col xs="auto">
            <p className="labelz">ZONING</p>
          </col>
          <col xs="auto">
            <Zoned />
          </col>
          {/* year label and component */}
          <col xs="auto">
            <p className="labelz">YEAR</p>
          </col>
          <col xs="auto">
            <YearSelect />
          </col>
          {/* submit button */}
          <col xs="auto">
            <div className="nudge">
              <Button color="secondary" size="sm">
                Search
              </Button>
              {/* <Button
              color="info"
              onClick={props}
              size="sm"
              className="submitbutton">
              Search
            </Button> */}
            </div>
          </col>
        </row>
      </container>
    </div>
  );
};

export default Searchgrid;
