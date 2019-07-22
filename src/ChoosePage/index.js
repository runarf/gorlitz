import React, { useState, useEffect } from "react";
import journeys from "./roundTripPrices";
import applyFilters from "./filters";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import convertJourneyToEvent from "./ConvertJourneyToEvent";

import {
  Box,
  Container,
  makeStyles
} from "@material-ui/core";

import Calendar from "./Calendar";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";

momentDurationFormatSetup(moment);
const useStyles = makeStyles(themes => ({
  drawer: {
    maxWidth: 10,
    flexShrink: 0
  }
}));

const getOriginStations = () => {
  const originStations = journeys.reduce(
    (stations, journey) => {
      const station = journey.there.origin;
      if (stations.includes(station)) {
        return stations;
      } else {
        return [...stations, station];
      }
    },
    []
  );
  return originStations;
};

function ChoosePage() {
  const classes = useStyles();
  const [originStations, setOriginStations] = useState([]);
  const [events, setEvents] = useState([]);
  const [maxTravelTime, setMaxTravelTime] = useState(24);
  const [displaydJourneys, setDisplaydJourneys] = useState(
    []
  );

  useEffect(() => {
    const originStations = getOriginStations();
    setOriginStations(originStations);
  }, []);

  const [selectedStations, setSelectedStations] = useState(
    {}
  );

  const [departureTime, setDepartureTime] = useState([
    0,
    48
  ]);
  const [
    returnArrivalTime,
    setReturnArrivalTime
  ] = useState([0, 48]);

  const [maxPrice, setMaxPrice] = useState(50);

  useEffect(() => {
    const journeysWithDepartureBefore = applyFilters({
      selectedStations,
      journeys,
      departureTime,
      returnArrivalTime,
      maxTravelTime,
      maxPrice
    });

    setDisplaydJourneys(journeysWithDepartureBefore);
    const events = convertJourneyToEvent(
      journeysWithDepartureBefore
    );

    setEvents(events);
  }, [
    selectedStations,
    departureTime,
    returnArrivalTime,
    maxTravelTime,
    maxPrice
  ]);

  const handleChange = name => event => {
    setSelectedStations({
      ...selectedStations,
      [name]: event.target.checked
    });
  };

  const [selectedEvent, setSelectedEvent] = useState({
    there: {
      origin: "Berlin SXF",
      destination: "Görlitz",
      departure: moment("2019-07-19T04:35:00+02:00"),
      arrival: moment("2019-07-19T10:50:00+02:00"),
      price: 19.98,
      url:
        "https://shop.global.flixbus.com/s?departureCity=88&arrivalCity=3408&departureStation=471&arrivalStation=4468&rideDate=19.07.2019&currency=EUR&adult=1&children=0&bike_slot=0"
    },
    back: {
      origin: "Görlitz",
      destination: "Berlin Südkreuz",
      departure: moment("2019-07-21T19:00:00+02:00"),
      arrival: moment("2019-07-22T00:35:00+02:00"),
      price: 15.98,
      url:
        "https://shop.global.flixbus.com/s?departureCity=3408&arrivalCity=88&departureStation=4468&arrivalStation=481&rideDate=21.07.2019&currency=EUR&adult=1&children=0&bike_slot=0"
    }
  });

  const onSelectEvent = event => {
    const selectedJourney = displaydJourneys[event.id];
    const there = selectedJourney.there;
    const back = selectedJourney.back;
    const information = {
      there: {
        origin: there.origin,
        destination: there.destination,
        departure: moment(there.departure),
        arrival: moment(there.arrival),
        price: there.price,
        url: there.url
      },
      back: {
        origin: back.origin,
        destination: back.destination,
        departure: moment(back.departure),
        arrival: moment(back.arrival),
        price: back.price,
        url: back.url
      }
    };
    setSelectedEvent(information);
  };

  return (
    <Container>
      <SideBarLeft
        style={classes.drawer}
        originStations={originStations}
        handleChange={handleChange}
        departureTime={departureTime}
        setDepartureTime={setDepartureTime}
        returnDepartureTime={returnArrivalTime}
        setReturnDepartureTime={setReturnArrivalTime}
        setMaxTravelTime={setMaxTravelTime}
        setMaxPrice={setMaxPrice}
      />
      <Box>
        <Calendar
          events={events}
          onSelectEvent={onSelectEvent}
        />
      </Box>
      <SideBarRight
        style={classes.drawer}
        selectedEvent={selectedEvent}
      />
    </Container>
  );
}

export default ChoosePage;
