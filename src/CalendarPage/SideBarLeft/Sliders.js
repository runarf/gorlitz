import React from "react";
import { Slider } from "@material-ui/core";

const Sliders = ({ timesDispatcher, prices, pricesDispatcher }) => {
  return (
    <>
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
    </>
  );
};

export default Sliders;
