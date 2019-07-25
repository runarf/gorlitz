import React, { useEffect } from "react";
import { Drawer, Slider } from "@material-ui/core";
import CheckBoxes from "./Checkboxes";
import { useField } from "formik";

const FormikSlider = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  useEffect(() => {}, [field]);
  delete field.onBlur;
  return (
    <Slider
      {...field}
      {...props}
      onChange={(event, value) => {
        event.target.id = field.name;
        event.target.value = value;
        field.onChange(event, value);
      }}
    />
  );
};

const SideBarLeft = ({
  values,
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
      {JSON.stringify(values)}
      <FormikSlider
        name="maxPrice"
        defaultValue={24}
        valueLabelDisplay="auto"
        marks
        min={0}
        max={24}
      />
    </Drawer>
  );
};

export default SideBarLeft;
