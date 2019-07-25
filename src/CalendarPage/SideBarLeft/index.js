import React from "react";
import { Drawer } from "@material-ui/core";
import CheckBoxes from "./Checkboxes";
import Sliders from "./Sliders";

const SideBarLeft = ({
  style,
  stationsDispatcher,
  stations,
  timesDispatcher,
  pricesDispatcher,
  prices
}) => {
  const handleChangeSelectedOriginStations = name => event => {
    stationsDispatcher({
      type: "SET_SELECTED_ORIGIN_STATIONS",
      value: {
        [name]: event.target.checked
      }
    });
  };

  const handleChangeSelectedDestinations = name => event => {
    stationsDispatcher({
      type: "SET_SELECTED_DESTINATIONS_STATIONS",
      value: {
        [name]: event.target.checked
      }
    });
  };

  return (
    <Drawer variant="permanent" anchor="left" className={style}>
      Destinations
      <CheckBoxes
        stations={stations.selectedDestinationsStations}
        handleChangeSelectedStations={handleChangeSelectedDestinations}
      />
      Origins
      <CheckBoxes
        stations={stations.selectedOriginStations}
        handleChangeSelectedStations={handleChangeSelectedOriginStations}
      />
      <Sliders
        prices={prices}
        pricesDispatcher={pricesDispatcher}
        timesDispatcher={timesDispatcher}
      />
    </Drawer>
  );
};

export default SideBarLeft;
