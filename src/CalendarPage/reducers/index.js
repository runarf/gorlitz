const stationsReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_ORIGIN_STATIONS":
      return {
        ...state,
        selectedOriginStations: {
          ...state.selectedOriginStations,
          ...action.value
        }
      };
    case "SET_SELECTED_DESTINATIONS_STATIONS":
      return {
        ...state,
        selectedDestinationsStations: {
          ...state.selectedDestinationsStations,
          ...action.value
        }
      };
    default:
      return state;
  }
};

const stationsInitialValues = {
  selectedOriginStations: {},
  selectedDestinationsStations: {}
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case "SET_MAX_TRAVEL_TIME":
      return { ...state, maxTravelTime: action.value };
    case "SET_BACK_ARRIVAL_TIME":
      return { ...state, backArrivalTime: action.value };
    case "SET_THERE_DEPARTURE_TIME":
      return { ...state, thereDepartureTime: action.value };
    default:
      return state;
  }
};

const timesInitialState = {
  minAndMaxTravelTime: {
    min: 0,
    max: 100
  },
  maxTravelTime: 24,
  backArrivalTime: [0, 48],
  thereDepartureTime: [0, 48]
};

const pricesReducer = (state, action) => {
  switch (action.type) {
    case "SET_MAX_PRICE":
      return { ...state, maxPrice: action.value };
    case "SET_LOWEST_AND_HIGHEST_ROUND_TRIP_PRICE":
      return { ...state, lowestAndHighestRoundTripPrice: action.value };
    default:
      return state;
  }
};

const pricesInitialState = {
  maxPrice: 50,
  lowestAndHighestRoundTripPrice: {
    lowest: 0,
    highest: 0
  }
};

export default {
  pricesInitialState,
  pricesReducer,
  timesInitialState,
  timesReducer,
  stationsReducer,
  stationsInitialValues
};
