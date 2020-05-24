import { Times } from '../Interfaces'

export const timesReducer = (
    state: Times,
    action: {
        type: string
        value: any
    }
) => {
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
export const timesInitialState: Times = {
    directOnly: false,
    extremumTravelTime: {
        min: 0,
        max: 0,
    },
    maxTravelTime: 24,
    backArrivalTime: [0, 48],
    thereDepartureTime: [0, 48],
}
