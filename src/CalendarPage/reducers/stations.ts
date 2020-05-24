import {
    SelectedStations,
    SelectedOriginDestinationStations,
} from '../Interfaces'
const stationsReducer = (
    state: SelectedOriginDestinationStations,
    action: {
        type: string
        value: SelectedStations
    }
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
export default stationsReducer
export const stationsInitialValues: SelectedOriginDestinationStations = {
    selectedOriginStations: {},
    selectedDestinationsStations: {},
}
