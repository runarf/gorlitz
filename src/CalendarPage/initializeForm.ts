import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import { ThereAndBackWithPrice } from '../TripInterfaces'
import { ExtremumPrice } from './Interfaces'
momentDurationFormatSetup(moment)

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

export const initialEvent = {
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
