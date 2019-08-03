import moment from 'moment'

const getCheckedJourneys = (
    selectedStations,
    journeys,
    isDestinationStations
) => {
    const checkedStationsNames = Object.entries(
        selectedStations
    ).reduce(
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

    const checkedJourneys = journeys.reduce(
        (checkedJourneys, journey) => {
            const stationName = isDestinationStations
                ? journey.there.destination.name
                : journey.there.origin.name

            const returnStation = isDestinationStations
                ? journey.back.origin.name
                : journey.back.destination.name

            if (
                checkedStationsNames.includes(
                    stationName
                ) &&
                checkedStationsNames.includes(returnStation)
            ) {
                return [...checkedJourneys, journey]
            } else {
                return checkedJourneys
            }
        },
        []
    )

    return checkedJourneys
}

const isTimeBetween = ([min, max], time) => {
    return time > min && time < max
}

const getJourneysWithDepartureBefore = (
    checkedJourneys,
    departureTime,
    returnArrivalTime,
    maxTravelTime
) => {
    const journeysWithDepartureBefore = checkedJourneys.reduce(
        (journeysWithDepartureBefore, journey) => {
            const journeyDeparture = moment(
                journey.there.departure
            )

            const journeyDepartureHour = journeyDeparture.hour()
            const journeyDepartureHoursAfterFriday =
                journeyDeparture.isoWeekday() === 5
                    ? journeyDepartureHour
                    : 24 + journeyDepartureHour

            const journeyArrival = moment(
                journey.there.arrival
            )

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
                return [
                    ...journeysWithDepartureBefore,
                    journey,
                ]
            } else {
                return journeysWithDepartureBefore
            }
        },
        []
    )
    return journeysWithDepartureBefore
}

const getDirectJourneys = journeys => {
    const directJourneys = journeys.filter(journey => {
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
}) => {
    const checkedJourneys = getCheckedJourneys(
        stations.selectedOriginStations,
        roundTrips,
        false
    )

    const checkedDestinations = getCheckedJourneys(
        stations.selectedDestinationsStations,
        checkedJourneys,
        true
    )

    const directOrIndirectJourneys = times.directOnly
        ? getDirectJourneys(checkedDestinations)
        : checkedDestinations

    const journeysWithMaxPrice = directOrIndirectJourneys.filter(
        journey => maxPrice > journey.price
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
