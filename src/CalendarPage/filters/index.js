import moment from 'moment'

const getCheckedDestinations = (
    selectedDestinations,
    journeys
) => {
    const checkedDestinations = Object.entries(
        selectedDestinations
    )
        .filter(([key, value]) => {
            return value
        })
        .map(([key, value]) => key)

    const checkedJourneys = journeys.reduce(
        (checkedJourneys, journey) => {
            const destinationStation =
                journey.there.destination.name
            const returnDestinationStation =
                journey.back.origin.name

            if (
                checkedDestinations.includes(
                    destinationStation
                ) &&
                checkedDestinations.includes(
                    returnDestinationStation
                )
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

const getCheckedJourneys = (selectedStations, journeys) => {
    const checkedStations = Object.entries(selectedStations)
        .filter(([key, value]) => {
            return value
        })
        .map(([key, value]) => key)
    const checkedJourneys = journeys.reduce(
        (checkedJourneys, journey, index) => {
            const originStation = journey.there.origin.name
            const returnOriginStation =
                journey.back.destination.name

            if (
                checkedStations.includes(originStation) &&
                checkedStations.includes(
                    returnOriginStation
                )
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

const applyFilters = ({
    stations,
    roundTrips,
    times,
    maxPrice,
}) => {
    const checkedJourneys = getCheckedJourneys(
        stations.selectedOriginStations,
        roundTrips
    )

    const checkedDestinations = getCheckedDestinations(
        stations.selectedDestinationsStations,
        checkedJourneys
    )

    const journeysWithMaxPrice = checkedDestinations.filter(
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

    debugger
    return journeysSortedByPrice
}

export default applyFilters
