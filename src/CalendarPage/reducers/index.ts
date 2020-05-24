import { Prices } from '../Interfaces'

export const pricesReducer = (state: Prices, action) => {
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

export const pricesInitialState: Prices = {
    maxPrice: 50,
    lowestAndHighestRoundTripPrice: {
        lowest: 0,
        highest: 0,
    },
}
