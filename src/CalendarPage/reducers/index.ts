import { SelectedStations } from '..'

const stationsReducer = (
    state: {
        selectedOriginStations: SelectedStations
        selectedDestinationsStations: SelectedStations
    },
    action: { type: string; value: SelectedStations }
) => {
    switch (action.type) {
        case 'SET_SELECTED_ORIGIN_STATIONS':
            return {
                ...state,
                selectedOriginStations: {
                    ...state.selectedOriginStations,
                    ...action.value,
                },
            }
        case 'SET_SELECTED_DESTINATIONS_STATIONS':
            return {
                ...state,
                selectedDestinationsStations: {
                    ...state.selectedDestinationsStations,
                    ...action.value,
                },
            }
        default:
            return state
    }
}

const stationsInitialValues: {
    selectedOriginStations: SelectedStations
    selectedDestinationsStations: SelectedStations
} = {
    selectedOriginStations: {},
    selectedDestinationsStations: {},
}

const timesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MAX_TRAVEL_TIME':
            return { ...state, maxTravelTime: action.value }
        case 'SET_BACK_ARRIVAL_TIME':
            return {
                ...state,
                backArrivalTime: action.value,
            }
        case 'SET_THERE_DEPARTURE_TIME':
            return {
                ...state,
                thereDepartureTime: action.value,
            }
        case 'SET_EXTREMUM_TRAVEL_TIME':
            return {
                ...state,
                extremumTravelTime: action.value,
            }
        case 'SET_DIRECT_ONLY_BOOLEAN':
            return {
                ...state,
                directOnly: action.value,
            }
        default:
            return state
    }
}

const timesInitialState = {
    directOnly: false,
    extremumTravelTime: {
        min: 0,
        max: 0,
    },
    maxTravelTime: 24,
    backArrivalTime: [0, 48],
    thereDepartureTime: [0, 48],
}

const pricesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MAX_PRICE':
            return { ...state, maxPrice: action.value }
        case 'SET_LOWEST_AND_HIGHEST_ROUND_TRIP_PRICE':
            return {
                ...state,
                lowestAndHighestRoundTripPrice:
                    action.value,
            }
        default:
            return state
    }
}

const pricesInitialState = {
    maxPrice: 50,
    lowestAndHighestRoundTripPrice: {
        lowest: 0,
        highest: 0,
    },
}

export {
    pricesInitialState,
    pricesReducer,
    timesInitialState,
    timesReducer,
    stationsReducer,
    stationsInitialValues,
}
