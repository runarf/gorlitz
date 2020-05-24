import {
    SelectedStations,
    SelectedOriginDestinationStations,
} from '../Interfaces'
const stationsReducer = (
    state: SelectedOriginDestinationStations,
    action: {
        type: string
        stations: SelectedStations
    }
) => {
    switch (action.type) {
        case 'SET_SELECTED_ORIGIN_STATIONS':
            return {
                ...state,
                selectedOriginStations: {
                    ...state.selectedOriginStations,
                    ...action.stations,
                },
            }
        case 'SET_SELECTED_DESTINATIONS_STATIONS':
            return {
                ...state,
                selectedDestinationsStations: {
                    ...state.selectedDestinationsStations,
                    ...action.stations,
                },
            }
        default:
            return state
    }
}
export default stationsReducer

export const setSelectedOriginStations = (
    stations: SelectedStations
) => {
    return {
        type: 'SET_SELECTED_ORIGIN_STATIONS',
        stations,
    }
}

export const setSelectedDestinationStations = (
    stations: SelectedStations
) => {
    return {
        type: 'SET_SELECTED_DESTINATIONS_STATIONS',
        stations,
    }
}

export const stationsInitialValues: SelectedOriginDestinationStations = {
    selectedOriginStations: {},
    selectedDestinationsStations: {},
}
