import moment from "moment";

const getCheckedJourneys = (selectedStations, journeys) => {
  const checkedStations = Object.entries(selectedStations)
    .filter(([key, value]) => {
      return value;
    })
    .map(([key, value]) => key);
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

const isTimeBetween = ([min, max], time) => {
  return time > min && time < max;
};

const getJourneysWithDepartureBefore = (
  checkedJourneys,
  departureTime,
  returnArrivalTime,
  maxTravelTime
) => {
  const journeysWithDepartureBefore = checkedJourneys.reduce(
    (journeysWithDepartureBefore, journey) => {
      const journeyDeparture = moment(
        journey.there.departure
      );

      const journeyDepartureHour = journeyDeparture.hour();
      const journeyDepartureHoursAfterFriday =
        journeyDeparture.isoWeekday() === 5
          ? journeyDepartureHour
          : 24 + journeyDepartureHour;

      const journeyArrival = moment(journey.there.arrival);

      const journeyBackDeparture = moment(
        journey.back.departure
      );
      const journeyBackArrival = moment(
        journey.back.arrival
      );

      const journeyBackArrivalHour = journeyBackArrival.hour();
      const journeyBackArrivalHoursAfterSunday =
        journeyBackArrival.isoWeekday() === 7
          ? journeyBackArrivalHour
          : journeyBackArrival.isoWeekday() * 24 +
            journeyBackArrivalHour;

      const travelTimeThere = journeyArrival.diff(
        journeyDeparture,
        "hours"
      );

      const travelTimeBack = journeyBackArrival.diff(
        journeyBackDeparture,
        "hours"
      );

      if (
        isTimeBetween(
          departureTime,
          journeyDepartureHoursAfterFriday
        ) &&
        isTimeBetween(
          returnArrivalTime,
          journeyBackArrivalHoursAfterSunday
        ) &&
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

const applyFilters = ({
  selectedStations,
  roundTrips,
  departureTime,
  returnArrivalTime,
  maxTravelTime,
  maxPrice
}) => {
  const checkedJourneys = getCheckedJourneys(
    selectedStations,
    roundTrips
  );
  const journeysWithMaxPrice = checkedJourneys.filter(
    journey => maxPrice > journey.roundTripPrice
  );

  const journeysWithDepartureBefore = getJourneysWithDepartureBefore(
    journeysWithMaxPrice,
    departureTime,
    returnArrivalTime,
    maxTravelTime
  );

  return journeysWithDepartureBefore;
};

export default applyFilters;
