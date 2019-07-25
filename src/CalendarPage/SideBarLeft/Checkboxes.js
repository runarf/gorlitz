import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";

const CheckBoxes = ({ stations, handleChangeSelectedStations }) => {
  debugger;
  return (
    Object.entries(stations).length > 0 &&
    Object.entries(stations).map(([station, checked], index) => (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            checked={checked}
            onChange={handleChangeSelectedStations(station)}
          />
        }
        label={station}
      />
    ))
  );
};

export default CheckBoxes;
