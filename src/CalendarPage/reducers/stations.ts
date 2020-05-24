import {
    SelectedStations,
    SelectedOriginDestinationStations,
} from '../Interfaces'
import { ThereAndBackWithPrice } from '../../TripInterfaces'
import { Dispatch } from 'react'
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
    dispatch: Dispatch<any>,
    roundTrips: ThereAndBackWithPrice[]
) => {
    const originStations = getOriginStations(roundTrips)
    const stations = originStations.reduce(
        (stations, station) => {
            if (stations[station] === undefined) {
                stations[station] = true
            }
            return stations
        },
        {}
    )
    dispatch({
        type: 'SET_SELECTED_ORIGIN_STATIONS',
        stations,
    })
}

export const setSelectedDestinationStations = (
    dispatch: Dispatch<any>,
    roundTrips: ThereAndBackWithPrice[]
) => {
    const destinations = getDestinationStations(roundTrips)
    const stations = destinations.reduce(
        (stations, station) => {
            if (stations[station] === undefined) {
                stations[station] = true
            }
            return stations
        },
        {}
    )
    dispatch({
        type: 'SET_SELECTED_DESTINATIONS_STATIONS',
        stations,
    })
}

const getDestinationStations = (
    roundTrips: ThereAndBackWithPrice[]
) => {
    const destinationStations = roundTrips.reduce<string[]>(
        (stations, roundTrip) => {
            const station =
                roundTrip.there.destination[0].name
            if (stations.includes(station)) {
                return stations
            } else {
                return [...stations, station]
            }
        },
        []
    )
    return destinationStations
}

export const stationsInitialValues: SelectedOriginDestinationStations = {
    selectedOriginStations: {},
    selectedDestinationsStations: {},
}

const getOriginStations = (
    roundTrips: ThereAndBackWithPrice[]
) => {
    const originStations = roundTrips.reduce<string[]>(
        (originStations, journey) => {
            const newStations = journey.there.origin
                .filter((station) => {
                    if (
                        originStations.includes(
                            station.name
                        )
                    ) {
                        return false
                    } else {
                        return true
                    }
                })
                .map((station) => station.name)

            return [...originStations, ...newStations]
        },
        []
    )
    return originStations
}
