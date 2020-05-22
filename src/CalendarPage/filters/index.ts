import moment from 'moment'
import {
    SelectedOriginDestinationStations,
    Times,
    SelectedStations,
} from '../Interfaces'
import { ThereAndBackWithPrice } from '../../TripInterfaces'

const getCheckedJourneys = (
    selectedStations: SelectedStations,
    roundTrips: ThereAndBackWithPrice[],
    isDestinationStations: boolean
) => {
    const checkedStationsNames = Object.entries(
        selectedStations
    ).reduce<string[]>(
        (
            checkedStationsNames,
            [stationName, isChecked]
        ) => {
            if (isChecked)
                return [
                    ...checkedStationsNames,
                    stationName,
                ]
            else return checkedStationsNames
        },
        []
    )

    const checkedRoundTrips = roundTrips.reduce<
        ThereAndBackWithPrice[]
    >((checkedRoundTrips, roundTrip) => {
        const stations = isDestinationStations
            ? roundTrip.there.destination
            : roundTrip.there.origin

        const returnStations = isDestinationStations
            ? roundTrip.back.origin
            : roundTrip.back.destination

        const aStationsIsChecked = stations.find(
            (station) =>
                checkedStationsNames.includes(station.name)
        )

        const aReturnStationIsChecked = returnStations.find(
            (returnStation) =>
                checkedStationsNames.includes(
                    returnStation.name
                )
        )

        if (aStationsIsChecked && aReturnStationIsChecked) {
            return [...checkedRoundTrips, roundTrip]
        } else {
            return checkedRoundTrips
        }
    }, [])

    return checkedRoundTrips
}

const isTimeBetween = ([min, max], time: number) => {
    return time > min && time < max
}

const getJourneysWithDepartureBefore = (
    checkedJourneys: ThereAndBackWithPrice[],
    departureTime: [number, number],
    returnArrivalTime: [number, number],
    maxTravelTime: number
) => {
    const journeysWithDepartureBefore = checkedJourneys.reduce<
        ThereAndBackWithPrice[]
    >((journeysWithDepartureBefore, journey) => {
        const journeyDeparture = moment(
            journey.there.departure
        )

        const journeyDepartureHour = journeyDeparture.hour()
        const journeyDepartureHoursAfterFriday =
            journeyDeparture.isoWeekday() === 5
                ? journeyDepartureHour
                : 24 + journeyDepartureHour

        const journeyArrival = moment(journey.there.arrival)

        const journeyBackDeparture = moment(
            journey.back.departure
        )
        const journeyBackArrival = moment(
            journey.back.arrival
        )

        const journeyBackArrivalHour = journeyBackArrival.hour()
        const journeyBackArrivalHoursAfterSunday =
            journeyBackArrival.isoWeekday() === 7
                ? journeyBackArrivalHour
                : journeyBackArrival.isoWeekday() * 24 +
                  journeyBackArrivalHour

        const travelTimeThere = journeyArrival.diff(
            journeyDeparture,
            'hours'
        )

        const travelTimeBack = journeyBackArrival.diff(
            journeyBackDeparture,
            'hours'
        )

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
            return [...journeysWithDepartureBefore, journey]
        } else {
            return journeysWithDepartureBefore
        }
    }, [])
    return journeysWithDepartureBefore
}

const getDirectJourneys = (
    journeys: ThereAndBackWithPrice[]
): ThereAndBackWithPrice[] => {
    const directJourneys = journeys.filter((journey) => {
        const thereDirect = journey.there.isDirect
        const backDirect = journey.back.isDirect

        return thereDirect && backDirect
    })

    return directJourneys
}

const applyFilters = ({
    stations,
    roundTrips,
    times,
    maxPrice,
}: {
    stations: SelectedOriginDestinationStations
    roundTrips: ThereAndBackWithPrice[]
    times: Times
    maxPrice: number
}) => {
    const checkedJourneys: ThereAndBackWithPrice[] = getCheckedJourneys(
        stations.selectedOriginStations,
        roundTrips,
        false
    )

    const checkedDestinations: ThereAndBackWithPrice[] = getCheckedJourneys(
        stations.selectedDestinationsStations,
        checkedJourneys,
        true
    )

    const directOrIndirectJourneys: ThereAndBackWithPrice[] = times.directOnly
        ? getDirectJourneys(checkedDestinations)
        : checkedDestinations

    const journeysWithMaxPrice = directOrIndirectJourneys.filter(
        (journey) => maxPrice > journey.price
    )

    const journeysWithDepartureBefore = getJourneysWithDepartureBefore(
        journeysWithMaxPrice,
        times.thereDepartureTime,
        times.backArrivalTime,
        times.maxTravelTime
    )

    const journeysSortedByPrice = journeysWithDepartureBefore.sort(
        (a, b) => {
            return b.price - a.price
        }
    )

    return journeysSortedByPrice
}

export default applyFilters
