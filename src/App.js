import React, { useState, useEffect } from "react";
import "./App.css";
import journeys from "./roundTripPrices";

import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

import { Container, makeStyles } from "@material-ui/core";

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

const getCheckedJourneys = checkedStations => {
  const checkedJourneys = journeys.reduce(
    (checkedJourneys, journey, index) => {
      const originStation = journey.there.origin;
      const returnOriginStation = journey.back.destination;

      if (
        checkedStations.includes(originStation) &&
        checkedStations.includes(returnOriginStation)
      ) {
        return [...checkedJourneys, journey];
      } else {
        return checkedJourneys;
      }
    },
    []
  );

  return checkedJourneys;
};

const getJourneysWithDepartureBefore = (
  checkedJourneys,
  departureTime,
  returnDepartureTime,
  maxTravelTime
) => {
  const journeysWithDepartureBefore = checkedJourneys.reduce(
    (journeysWithDepartureBefore, journey) => {
      const journeyDeparture = moment(
        journey.there.departure
      );
      const journeyArrival = moment(journey.there.arrival);

      const journeyBackDeparture = moment(
        journey.back.departure
      );
      const journeyBackArrival = moment(
        journey.back.arrival
      );

      const travelTimeThere = journeyArrival.diff(
        journeyDeparture,
        "hours"
      );
      const travelTimeBack = journeyBackArrival.diff(
        journeyBackDeparture,
        "hours"
      );

      if (
        journeyDeparture.hour() > departureTime &&
        journeyBackDeparture.hour() > returnDepartureTime &&
        travelTimeThere < maxTravelTime &&
        travelTimeBack < maxTravelTime
      ) {
        return [...journeysWithDepartureBefore, journey];
      } else {
        return journeysWithDepartureBefore;
      }
    },
    []
  );
  return journeysWithDepartureBefore;
};

const convertJourneyToEvent = journeys => {
  const events = journeys.map((journey, index) => {
    const travelTimeThere = moment.duration(
      moment(journey.there.arrival).diff(
        moment(journey.there.departure)
      )
    );

    const travelTimeBack = moment.duration(
      moment(journey.back.arrival).diff(
        moment(journey.back.departure)
      )
    );

    const event = {
      id: index,
      title: `${
        journey.roundTripPrice
      } ${travelTimeThere.format(
        "HH:mm"
      )} ${travelTimeBack.format("HH:mm")}`,
      start: moment(journey.there.departure),
      end: moment(journey.back.arrival)
    };
    return event;
  });

  return events;
};

function App() {
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

  const [departureTime, setDepartureTime] = useState(0);
  const [
    returnDepartureTime,
    setReturnDepartureTime
  ] = useState(0);
  useEffect(() => {
    const checkedStations = Object.entries(selectedStations)
      .filter(([key, value]) => {
        return value;
      })
      .map(([key, value]) => key);

    const checkedJourneys = getCheckedJourneys(
      checkedStations
    );
    const journeysWithDepartureBefore = getJourneysWithDepartureBefore(
      checkedJourneys,
      departureTime,
      returnDepartureTime,
      maxTravelTime
    );

    setDisplaydJourneys(journeysWithDepartureBefore);
    const events = convertJourneyToEvent(
      journeysWithDepartureBefore
    );

    setEvents(events);
  }, [
    selectedStations,
    departureTime,
    returnDepartureTime,
    maxTravelTime
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
    <div className="App">
      <Container>
        <SideBarLeft
          style={classes.drawer}
          originStations={originStations}
          handleChange={handleChange}
          setDepartureTime={setDepartureTime}
          setReturnDepartureTime={setReturnDepartureTime}
          setMaxTravelTime={setMaxTravelTime}
        />
        <Calendar
          events={events}
          onSelectEvent={onSelectEvent}
        />
        <SideBarRight
          style={classes.drawer}
          selectedEvent={selectedEvent}
        />
      </Container>
    </div>
  );
}

export default App;
