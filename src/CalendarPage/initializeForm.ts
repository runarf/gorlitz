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
        origin: [
            { name: 'Berlin Alexanderplatz', id: '1224' },
            { name: 'Berlin Alt-Tegel', id: '3288' },
            { name: 'Berlin central bus station', id: '1' },
            { name: 'Berlin SXF', id: '471' },
        ],
        destination: [
            { id: '1494', name: 'Prague ÚAN Florenc' },
        ],
        departure: moment('2019-08-09T00:10:00.000Z'),
        arrival: moment('2019-08-09T05:40:00.000Z'),
        price: 18.9,
        url:
            'https://shop.global.flixbus.com/s?departureCity=88&arrivalCity=1374&departureStation=3288&arrivalStation=1494&rideDate=09.08.2019&currency=EUR&adult=1&children=0&bike_slot=0',
    },
    back: {
        origin: [
            {
                id: '6988',
                name: 'Prague Main Railway Station',
            },
        ],
        destination: [
            { name: 'Berlin central bus station', id: '1' },
            { name: 'Berlin central bus station', id: '1' },
            { name: 'Berlin Südkreuz', id: '481' },
            { name: 'Berlin Südkreuz', id: '481' },
        ],
        departure: moment('2019-08-12T12:15:00.000Z'),
        arrival: moment('2019-08-12T17:05:00.000Z'),
        price: 18.9,
        url:
            'https://shop.global.flixbus.com/s?departureCity=1374&arrivalCity=88&departureStation=6988&arrivalStation=1&rideDate=12.08.2019&currency=EUR&adult=1&children=0&bike_slot=0',
    },
}

export {
    initialEvent,
    getMaxAndMinRoundTripPrice,
    getExtremumRoundTripTravelTime,
    getOriginStations,
    getDestinationStations,
}