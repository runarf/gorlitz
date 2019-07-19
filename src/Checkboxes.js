import React from "react";
import {
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

const CheckBoxes = ({ originStations, handleChange }) => {
  return (
    originStations.length > 0 &&
    originStations.map((station, index) => (
      <FormControlLabel
        key={index}
        control={
          <Checkbox onChange={handleChange(station)} />
        }
        label={station}
      />
    ))
  );
};

export default CheckBoxes;
