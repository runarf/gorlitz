import React from "react";
import { Card, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const SelectedJourney = ({ selectedEvent }) => {
  const OneWay = ({ oneWay }) => {
    return (
      <Card>
        <Typography>
          {oneWay.origin.name + " - " + oneWay.destination.name}
        </Typography>
        <Typography>{oneWay.price} €</Typography>
        <Typography>{oneWay.departure.format("dddd HH:mm")}</Typography>
        <Typography>{oneWay.arrival.format("dddd HH:mm")}</Typography>

        <a href={oneWay.url}>
          <ShoppingCart />
        </a>
      </Card>
    );
  };

  return (
    <>
      <OneWay oneWay={selectedEvent.there} />
      <OneWay oneWay={selectedEvent.back} />
    </>
  );
};

export default SelectedJourney;
