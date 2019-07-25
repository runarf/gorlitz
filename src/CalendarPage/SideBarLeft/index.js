import React from "react";
import { Drawer, Slider } from "@material-ui/core";
import CheckBoxes from "./Checkboxes";

const SideBarLeft = ({
  style,
  destinations,
  handleChangeSelectedDestinations,
  originStations,
  handleChangeSelectedStations,
  departureTime,
  setDepartureTime,
  returnDepartureTime,
  setReturnDepartureTime,
  setMaxTravelTime,
  setMaxPrice,
  maxAndMinRoundTripPrice
}) => {
  return (
    <Drawer variant="permanent" anchor="left" className={style}>
      Destinations
      <CheckBoxes
        stations={destinations}
        handleChangeSelectedStations={handleChangeSelectedDestinations}
      />
      Origins
      <CheckBoxes
        stations={originStations}
        handleChangeSelectedStations={handleChangeSelectedStations}
      />
      Departure Time: <br />
      <Slider
        value={departureTime}
        defaultValue={0}
        valueLabelDisplay="auto"
        marks
        min={0}
        max={48}
        onChange={(event, value) => setDepartureTime(value)}
      />
      Return Departure Time: <br />
      <Slider
        value={returnDepartureTime}
        valueLabelDisplay="auto"
        marks
        min={0}
        max={48}
        onChange={(event, value) => setReturnDepartureTime(value)}
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
      Maximum prize:
      <Slider
        defaultValue={50}
        valueLabelDisplay="auto"
        min={maxAndMinRoundTripPrice.min}
        max={maxAndMinRoundTripPrice.max}
        marks
        onChange={(event, value) => setMaxPrice(value)}
      />
    </Drawer>
  );
};

export default SideBarLeft;
