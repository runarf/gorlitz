import { Times, ExtremumTime } from '../Interfaces'
import { Dispatch } from 'react'
import { ThereAndBackWithPrice } from '../../TripInterfaces'
import moment from 'moment'

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

export const setMaxTravelTime = (
    dispatcher: Dispatch<any>,
    roundTrips: ThereAndBackWithPrice[]
) => {}

export const setExtremumTravelTime = (
    dispatcher: Dispatch<any>,
    roundTrips: ThereAndBackWithPrice[]
) => {
    const extremumRoundTripTravelTime = getExtremumRoundTripTravelTime(
        roundTrips
    )

    dispatcher({
        type: 'SET_EXTREMUM_TRAVEL_TIME',
        value: extremumRoundTripTravelTime,
    })
}

const getExtremumRoundTripTravelTime = (
    roundTrips: ThereAndBackWithPrice[]
): ExtremumTime => {
    const extremumRoundTripTravelTime = roundTrips.reduce<
        ExtremumTime
    >(
        (extremumRoundTripTravelTime, roundTrip) => {
            const travelTimeThere = moment.duration(
                moment(roundTrip.there.arrival).diff(
                    moment(roundTrip.there.departure)
                )
            )

            const travelTimeBack = moment.duration(
                moment(roundTrip.back.arrival).diff(
                    moment(roundTrip.back.departure)
                )
            )

            const [shortest, longest] =
                travelTimeThere > travelTimeBack
                    ? [travelTimeBack, travelTimeThere]
                    : [travelTimeThere, travelTimeBack]

            if (extremumRoundTripTravelTime.min === 0) {
                extremumRoundTripTravelTime.min = shortest.milliseconds()
            }

            if (
                longest.milliseconds() >
                extremumRoundTripTravelTime.max
            ) {
                extremumRoundTripTravelTime.max = longest.milliseconds()
            }
            if (
                shortest.milliseconds() <
                extremumRoundTripTravelTime.min
            ) {
                extremumRoundTripTravelTime.min = shortest.milliseconds()
            }

            return extremumRoundTripTravelTime
        },
        {
            min: 0,
            max: 0,
        }
    )

    return extremumRoundTripTravelTime
}
