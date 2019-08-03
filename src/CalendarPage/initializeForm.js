import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
momentDurationFormatSetup(moment)

const getDestinationStations = roundTrips => {
    const destinationStations = roundTrips.reduce(
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

const getOriginStations = roundTrips => {
    const originStations = roundTrips.reduce(
        (originStations, journey) => {
            const newStations = journey.there.origin
                .filter(station => {
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
                .map(station => station.name)

            return [...originStations, ...newStations]
        },
        []
    )
    return originStations
}

const getMaxAndMinRoundTripPrice = roundTrips => {
    const mostExpensiveRoundTripPrice = roundTrips.reduce(
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

const getExtremumRoundTripTravelTime = roundTrips => {
    const extremumRoundTripTravelTime = roundTrips.reduce(
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
                extremumRoundTripTravelTime.min = shortest
            }

            if (longest > extremumRoundTripTravelTime.max) {
                extremumRoundTripTravelTime.max = longest
            }
            if (
                shortest < extremumRoundTripTravelTime.min
            ) {
                extremumRoundTripTravelTime.min = shortest
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

const initialEvent = {
    there: {
        origin: {
            id: '481',
            name: 'Berlin Südkreuz',
        },
        destination: {
            id: '4468',
            name: 'Görlitz',
        },
        departure: moment('2019-07-19T04:35:00+02:00'),
        arrival: moment('2019-07-19T10:50:00+02:00'),
        price: 19.98,
        url:
            'https://shop.global.flixbus.com/s?departureCity=88&arrivalCity=3408&departureStation=471&arrivalStation=4468&rideDate=19.07.2019&currency=EUR&adult=1&children=0&bike_slot=0',
    },
    back: {
        destination: {
            id: '481',
            name: 'Berlin Südkreuz',
        },
        origin: { id: '4468', name: 'Görlitz' },
        departure: moment('2019-07-21T19:00:00+02:00'),
        arrival: moment('2019-07-22T00:35:00+02:00'),
        price: 15.98,
        url:
            'https://shop.global.flixbus.com/s?departureCity=3408&arrivalCity=88&departureStation=4468&arrivalStation=481&rideDate=21.07.2019&currency=EUR&adult=1&children=0&bike_slot=0',
    },
}

export {
    initialEvent,
    getMaxAndMinRoundTripPrice,
    getExtremumRoundTripTravelTime,
    getOriginStations,
    getDestinationStations,
}
