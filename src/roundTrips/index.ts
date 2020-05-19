import moment, { Moment } from 'moment'

export interface RoundTripWithPrice {
    price: number
    there: Trip
    back: Trip
}

const getRoundTripsOverWeekend = (
    roundTrips: any[],
    journeyThere: Trip,
    journeyBack: Trip
): RoundTripWithPrice[] => {
    const departureTo = moment(journeyThere.departure)
    const arrivalBack: Moment = moment(journeyBack.arrival)

    const daysBetween = arrivalBack.diff(
        departureTo,
        'days'
    )

    if (daysBetween > 4 || daysBetween < 0) {
        return roundTrips
    }

    const roundTrip: RoundTripWithPrice = {
        price: journeyThere.price + journeyBack.price,

        there: journeyThere,
        back: journeyBack,
    }
    return [...roundTrips, roundTrip]
}

interface Trip {
    departure: string
    arrival: string
    origin: [
        {
            name: string
            id: string
        }
    ]
    destination: [
        {
            id: string
            name: string
        }
    ]
    price: number
    url: string
    isDirect: boolean
}

export interface RawTrips {
    there: Trip[]
    back: Trip[]
}

const getRoundTrips: ({
    there,
    back,
}: RawTrips) => RoundTripWithPrice[] = ({
    there,
    back,
}) => {
    const roundTrips = there
        .flatMap((journeyTo) => {
            return back.reduce<RoundTripWithPrice[]>(
                (roundTrips, journeyBack) => {
                    const roundTripz: RoundTripWithPrice[] = getRoundTripsOverWeekend(
                        roundTrips,
                        journeyTo,
                        journeyBack
                    )
                    return roundTripz
                },
                []
            )
        })
        .sort((a, b) => b.price - a.price)

    return roundTrips
}

export default getRoundTrips
