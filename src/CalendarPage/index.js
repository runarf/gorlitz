import React, { useState, useEffect } from "react";
import applyFilters from "./filters";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import convertJourneyToEvent from "./convertJourneyToEvent";

import { Box, Container, makeStyles } from "@material-ui/core";

import Calendar from "./Calendar";
import SideBarLeft from "./SideBarLeft/";
import SideBarRight from "./SideBarRight/";
import { Formik, Form } from "formik";

momentDurationFormatSetup(moment);

const useStyles = makeStyles(themes => ({
  drawer: {
    maxWidth: 10,
    flexShrink: 0
  }
}));

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
      if (maxAndMinRoundTripPrice.min === 0) {
        maxAndMinRoundTripPrice.min = price;
      }
      if (price > maxAndMinRoundTripPrice.max) {
        return {
          ...maxAndMinRoundTripPrice,
          max: price
        };
      } else if (maxAndMinRoundTripPrice.min > price) {
        return { ...maxAndMinRoundTripPrice, min: price };
      } else {
        return maxAndMinRoundTripPrice;
      }
    },
    {
      min: 0,
      max: 0
    }
  );

  return mostExpensiveRoundTripPrice;
};

const CalendarPage = ({ roundTrips }) => {
  const classes = useStyles();
  const [originStations, setOriginStations] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [events, setEvents] = useState([]);
  const [maxTravelTime, setMaxTravelTime] = useState(24);
  const [displaydJourneys, setDisplaydJourneys] = useState([]);
  const [selectedStations, setSelectedStations] = useState({});
  const [selectedDestinations, setSelectedDestinations] = useState({});
  const [departureTime, setDepartureTime] = useState([0, 48]);
  const [returnArrivalTime, setReturnArrivalTime] = useState([0, 48]);
  const [maxPrice, setMaxPrice] = useState(50);

  const [maxAndMinRoundTripPrice, setMaxAndMinRoundTripPrice] = useState(0);

  useEffect(() => {
    const originStations = getOriginStations(roundTrips);
    setOriginStations(originStations);

    const destinations = getDestinationStations(roundTrips);
    setDestinations(destinations);

    const maxAndMinRoundTripPrice = getMaxAndMinRoundTripPrice(roundTrips);
    setMaxAndMinRoundTripPrice(maxAndMinRoundTripPrice);
  }, [roundTrips]);

  useEffect(() => {
    const journeysMatchingFilter = applyFilters({
      selectedStations,
      selectedDestinations,
      roundTrips,
      departureTime,
      returnArrivalTime,
      maxTravelTime,
      maxPrice
    });

    setDisplaydJourneys(journeysMatchingFilter);
    const events = convertJourneyToEvent(journeysMatchingFilter);

    setEvents(events);
  }, [
    roundTrips,
    selectedDestinations,
    selectedStations,
    departureTime,
    returnArrivalTime,
    maxTravelTime,
    maxPrice
  ]);

  const handleChangeSelectedStations = name => event => {
    setSelectedStations({
      ...selectedStations,
      [name]: event.target.checked
    });
  };

  const handleChangeSelectedDestinations = name => event => {
    setSelectedDestinations({
      ...selectedDestinations,
      [name]: event.target.checked
    });
  };

  const [selectedEvent, setSelectedEvent] = useState({
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
      {({ values }) => (
        <Form>
          <SideBarLeft
            values={values}
            style={classes.drawer}
            originStations={originStations}
            destinations={destinations}
            handleChangeSelectedDestinations={handleChangeSelectedDestinations}
            handleChangeSelectedStations={handleChangeSelectedStations}
            departureTime={departureTime}
            setDepartureTime={setDepartureTime}
            returnDepartureTime={returnArrivalTime}
            setReturnDepartureTime={setReturnArrivalTime}
            setMaxTravelTime={setMaxTravelTime}
            setMaxPrice={setMaxPrice}
            maxAndMinRoundTripPrice={maxAndMinRoundTripPrice}
          />
        </Form>
      )}
      <Box>
        <Calendar events={events} onSelectEvent={onSelectEvent} />
      </Box>
      <SideBarRight style={classes.drawer} selectedEvent={selectedEvent} />
    </Container>
  );
};

const CalendarPageWithFormik = props => {
  const initialValues = {
    maxPrice: 50
  };
  return (
    <Formik initialValues={initialValues}>
      <CalendarPage {...props} />
    </Formik>
  );
};

export default CalendarPageWithFormik;

export { CalendarPage };
