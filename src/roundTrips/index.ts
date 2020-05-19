import moment, { Moment } from 'moment'

export interface RoundTripWithPrice {
    price: any
    there: any
    back: any
}

const getRoundTripsOverWeekend = (
    roundTrips,
    journeyThere,
    journeyBack
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

const getRoundTrips = ({
    there,
    back,
}): RoundTripWithPrice[] => {
    const roundTrips = there
        .flatMap((journeyTo) => {
            return back.reduce(
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
        .sort((a, b) => b.roundTripPrice - a.roundTripPrice)

    return roundTrips
}

export default getRoundTrips
