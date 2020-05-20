import moment, { Moment } from 'moment'
import {
    Trip,
    ThereAndBackWithPrice,
    ThereAndBackTrips,
} from '../TripInterfaces'

const getRoundTripsOverWeekend = (
    roundTrips: any[],
    journeyThere: Trip,
    journeyBack: Trip
): ThereAndBackWithPrice[] => {
    const departureTo = moment(journeyThere.departure)
    const arrivalBack: Moment = moment(journeyBack.arrival)

    const daysBetween = arrivalBack.diff(
        departureTo,
        'days'
    )

    if (daysBetween > 4 || daysBetween < 0) {
        return roundTrips
    }

    const roundTrip: ThereAndBackWithPrice = {
        price: journeyThere.price + journeyBack.price,

        there: journeyThere,
        back: journeyBack,
    }
    return [...roundTrips, roundTrip]
}

const getRoundTrips: ({
    there,
    back,
}: ThereAndBackTrips) => ThereAndBackWithPrice[] = ({
    there,
    back,
}) => {
    const roundTrips = there
        .flatMap((journeyTo) => {
            return back.reduce<ThereAndBackWithPrice[]>(
                (roundTrips, journeyBack) => {
                    const roundTripz: ThereAndBackWithPrice[] = getRoundTripsOverWeekend(
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
