import React from "react";
import { Drawer, Slider } from "@material-ui/core";
import SelectedJourney from "./SelectedJourney";
import CheckBoxes from "./Checkboxes";

const SideBar = ({
  style,
  originStations,
  handleChange,
  selectedEvent,
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
      {Object.entries(selectedEvent).length > 0 && (
        <SelectedJourney selectedEvent={selectedEvent} />
      )}
    </Drawer>
  );
};

export default SideBar;
