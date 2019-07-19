import React from "react";
import { Drawer, Slider } from "@material-ui/core";
import CheckBoxes from "./Checkboxes";

const SideBarLeft = ({
  style,
  originStations,
  handleChange,
  setDepartureTime,
  setReturnDepartureTime,
  setMaxTravelTime
}) => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={style}
    >
      <CheckBoxes
        originStations={originStations}
        handleChange={handleChange}
      />
      Departure Time: <br />
      <Slider
        defaultValue={0}
        valueLabelDisplay="auto"
        marks
        min={0}
        max={24}
        onChange={(event, value) => setDepartureTime(value)}
      />
      Return Departure Time: <br />
      <Slider
        defaultValue={0}
        valueLabelDisplay="auto"
        marks
        min={0}
        max={24}
        onChange={(event, value) =>
          setReturnDepartureTime(value)
        }
      />
      Maximum travel time:
      <Slider
        defaultValue={24}
        valueLabelDisplay="auto"
        marks
        min={0}
        max={24}
        onChange={(event, value) => setMaxTravelTime(value)}
      />
    </Drawer>
  );
};

export default SideBarLeft;
