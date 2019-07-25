import React from "react";
import { Drawer, Slider } from "@material-ui/core";
import CheckBoxes from "./Checkboxes";

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
      Departure Time: <br />
      <Slider
        defaultValue={[0, 48]}
        valueLabelDisplay="auto"
        marks
        min={0}
        max={48}
        onChange={(event, value) =>
          timesDispatcher({ type: "SET_THERE_DEPARTURE_TIME", value })
        }
      />
      Return Departure Time: <br />
      <Slider
        defaultValue={[0, 48]}
        valueLabelDisplay="auto"
        marks
        min={0}
        max={48}
        onChange={(event, value) =>
          timesDispatcher({ type: "SET_BACK_ARRIVAL_TIME", value })
        }
      />
      Maximum travel time:
      <Slider
        defaultValue={24}
        valueLabelDisplay="auto"
        marks
        min={0}
        max={24}
        onChange={(event, value) =>
          timesDispatcher({ type: "SET_MAX_TRAVEL_TIME", value })
        }
      />
      Maximum prize:
      <Slider
        defaultValue={50}
        valueLabelDisplay="auto"
        min={prices.lowestAndHighestRoundTripPrice.lowest}
        max={prices.lowestAndHighestRoundTripPrice.highest}
        marks
        onChange={(event, value) =>
          pricesDispatcher({ type: "SET_MAX_PRICE", value })
        }
      />
    </Drawer>
  );
};

export default SideBarLeft;
