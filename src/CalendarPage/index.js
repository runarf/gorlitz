import React, { useState, useEffect, useReducer } from "react";
import applyFilters from "./filters";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import convertJourneyToEvent from "./convertJourneyToEvent";

import { Box, Container, makeStyles } from "@material-ui/core";

import Calendar from "./Calendar";
import SideBarLeft from "./SideBarLeft/";
import SideBarRight from "./SideBarRight/";
import {
  pricesInitialState,
  pricesReducer,
  timesInitialState,
  timesReducer,
  stationsReducer,
  stationsInitialValues
} from "./reducers/index.js";

momentDurationFormatSetup(moment);

const useStyles = makeStyles(themes => ({
  drawer: {
    maxWidth: 10,
    flexShrink: 0
  }
}));

const initialEvent = {
  there: {
    origin: { id: "481", name: "Berlin Südkreuz" },
    destination: { id: "4468", name: "Görlitz" },
    departure: moment("2019-07-19T04:35:00+02:00"),
    arrival: moment("2019-07-19T10:50:00+02:00"),
    price: 19.98,
    url:
      "https://shop.global.flixbus.com/s?departureCity=88&arrivalCity=3408&departureStation=471&arrivalStation=4468&rideDate=19.07.2019&currency=EUR&adult=1&children=0&bike_slot=0"
  },
  back: {
    destination: { id: "481", name: "Berlin Südkreuz" },
    origin: { id: "4468", name: "Görlitz" },
    departure: moment("2019-07-21T19:00:00+02:00"),
    arrival: moment("2019-07-22T00:35:00+02:00"),
    price: 15.98,
    url:
      "https://shop.global.flixbus.com/s?departureCity=3408&arrivalCity=88&departureStation=4468&arrivalStation=481&rideDate=21.07.2019&currency=EUR&adult=1&children=0&bike_slot=0"
  }
};

const getDestinationStations = roundTrips => {
  const destinationStations = roundTrips.reduce((stations, roundTrip) => {
    const station = roundTrip.there.destination.name;
    if (stations.includes(station)) {
      return stations;
    } else {
      return [...stations, station];
    }
  }, []);
  return destinationStations;
};

const getOriginStations = roundTrips => {
  const originStations = roundTrips.reduce((stations, journey) => {
    const station = journey.there.origin.name;
    if (stations.includes(station)) {
      return stations;
    } else {
      return [...stations, station];
    }
  }, []);
  return originStations;
};

const getMaxAndMinRoundTripPrice = roundTrips => {
  const mostExpensiveRoundTripPrice = roundTrips.reduce(
    (maxAndMinRoundTripPrice, roundTrip) => {
      const price = roundTrip.price;
      if (maxAndMinRoundTripPrice.lowest === 0) {
        maxAndMinRoundTripPrice.lowest = price;
      }
      if (price > maxAndMinRoundTripPrice.highest) {
        return {
          ...maxAndMinRoundTripPrice,
          highest: price
        };
      } else if (maxAndMinRoundTripPrice.lowest > price) {
        return { ...maxAndMinRoundTripPrice, lowest: price };
      } else {
        return maxAndMinRoundTripPrice;
      }
    },
    {
      lowest: 0,
      highest: 0
    }
  );

  return mostExpensiveRoundTripPrice;
};

const CalendarPage = ({ roundTrips }) => {
  const classes = useStyles();

  const [stations, stationsDispatcher] = useReducer(
    stationsReducer,
    stationsInitialValues
  );

  const [times, timesDispatcher] = useReducer(timesReducer, timesInitialState);

  const [prices, pricesDispatcher] = useReducer(
    pricesReducer,
    pricesInitialState
  );

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(initialEvent);
  const [displaydJourneys, setDisplaydJourneys] = useState([]);

  useEffect(() => {
    const originStations = getOriginStations(roundTrips);
    stationsDispatcher({
      type: "SET_SELECTED_ORIGIN_STATIONS",
      value: originStations.reduce((stations, station) => {
        if (stations[station] === undefined) {
          stations[station] = true;
        }
        return stations;
      }, {})
    });

    const destinations = getDestinationStations(roundTrips);
    stationsDispatcher({
      type: "SET_SELECTED_DESTINATIONS_STATIONS",
      value: destinations.reduce((stations, station) => {
        if (stations[station] === undefined) {
          stations[station] = true;
        }
        return stations;
      }, {})
    });

    const maxAndMinRoundTripPrice = getMaxAndMinRoundTripPrice(roundTrips);

    pricesDispatcher({
      type: "SET_LOWEST_AND_HIGHEST_ROUND_TRIP_PRICE",
      value: maxAndMinRoundTripPrice
    });
  }, [roundTrips]);

  useEffect(() => {
    const journeysMatchingFilter = applyFilters({
      stations,
      roundTrips,
      times,
      maxPrice: prices.maxPrice
    });

    setDisplaydJourneys(journeysMatchingFilter);
    const events = convertJourneyToEvent(journeysMatchingFilter);

    setEvents(events);
  }, [roundTrips, stations, times, prices.maxPrice]);

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
        stations={stations}
        stationsDispatcher={stationsDispatcher}
        timesDispatcher={timesDispatcher}
        pricesDispatcher={pricesDispatcher}
        prices={prices}
      />
      <Box>
        <Calendar events={events} onSelectEvent={onSelectEvent} />
      </Box>
      <SideBarRight style={classes.drawer} selectedEvent={selectedEvent} />
    </Container>
  );
};

export default CalendarPage;
