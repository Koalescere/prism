import React from "react";
import { Slider } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import "./Slider2.css";

export const Slider2 = () => {
  const style = {
    height: 400
  };

  return (
    // <div className="styleslider">
    //   <Slider defaultValue={0} min={0} step={10} max={100} vertical />
    // </div>


    <div className="styleslider">
      <Slider defaultValue={2018} min={2016} step={1} max={2018} vertical />
    </div>

  );
};


export default Slider2;
