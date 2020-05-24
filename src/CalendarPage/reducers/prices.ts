import { Prices, ExtremumPrice } from '../Interfaces'
import { Dispatch } from 'react'
import { ThereAndBackWithPrice } from '../../TripInterfaces'

export const pricesInitialState: Prices = {
    maxPrice: 50,
    lowestAndHighestRoundTripPrice: {
        lowest: 0,
        highest: 0,
    },
}

const pricesReducer = (state: Prices, action) => {
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
export default pricesReducer

export const setExtremumRoundTripPrice = (
    dispatcher: Dispatch<any>,
    roundTrips: ThereAndBackWithPrice[]
) => {
    const maxAndMinRoundTripPrice = getMaxAndMinRoundTripPrice(
        roundTrips
    )

    dispatcher({
        type: 'SET_LOWEST_AND_HIGHEST_ROUND_TRIP_PRICE',
        value: maxAndMinRoundTripPrice,
    })
}

export const getMaxAndMinRoundTripPrice = (
    roundTrips: ThereAndBackWithPrice[]
): ExtremumPrice => {
    const mostExpensiveRoundTripPrice = roundTrips.reduce<
        ExtremumPrice
    >(
        (maxAndMinRoundTripPrice, roundTrip) => {
            const price = roundTrip.price
            if (maxAndMinRoundTripPrice.lowest === 0) {
                maxAndMinRoundTripPrice.lowest = price
            }
            if (price > maxAndMinRoundTripPrice.highest) {
                return {
                    ...maxAndMinRoundTripPrice,
                    highest: price,
                }
            } else if (
                maxAndMinRoundTripPrice.lowest > price
            ) {
                return {
                    ...maxAndMinRoundTripPrice,
                    lowest: price,
                }
            } else {
                return maxAndMinRoundTripPrice
            }
        },
        {
            lowest: 0,
            highest: 0,
        }
    )

    return mostExpensiveRoundTripPrice
}
