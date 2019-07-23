import React from "react";
import {
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

const CheckBoxes = ({
  stations,
  handleChangeSelectedStations
}) => {
  return (
    stations.length > 0 &&
    stations.map((station, index) => (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            onChange={handleChangeSelectedStations(station)}
          />
        }
        label={station}
      />
    ))
  );
};

export default CheckBoxes;
