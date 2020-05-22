import { getRoundTripsOverWeekend } from '.'
import moment from 'moment'
import { Trip } from '../TripInterfaces'

const getRoundTripsOverWeekendFromTo = (from, to) => {
    const temp = {
        ...templateThere,
        departure: from,
        arrival: from,
    }

    const temp1 = {
        ...templateBack,
        departure: to,
        arrival: to,
    }
    return getRoundTripsOverWeekend([], temp, temp1)
}

const getCorrectRoundTripFromTo = (from, to) => {
    return [
        {
            ...templateCorrectRoundTrip,
            there: {
                ...templateCorrectRoundTrip.there,
                departure: from,
                arrival: from,
            },
            back: {
                ...templateCorrectRoundTrip.back,
                departure: to,
                arrival: to,
            },
        },
    ]
}

const templateThere: Trip = {
    departure: '',
    arrival: '',
    origin: [
        {
            id: '1',
            name: 'Berlin central bus station',
        },
    ],
    destination: [
        {
            id: '4468',
            name: 'Görlitz',
        },
    ],

    price: 29.98,
    url: 'there.com',
    isDirect: true,
}

const templateBack: Trip = {
    arrival: '',
    departure: '',
    origin: [
        {
            id: '4468',
            name: 'Görlitz',
        },
    ],
    destination: [
        {
            id: '1224',
            name: 'Berlin Alexanderplatz',
        },
    ],
    price: 22.98,
    url: 'back.com',
    isDirect: true,
}

const templateCorrectRoundTrip = {
    price: 52.96,
    there: templateThere,
    back: templateBack,
}

const FRIDAY = moment(
    'Fri-19-07-2019',
    'ddd-DD-MM-YYYY'
).toString()

const SATURDAY = moment('Sat-20-07-2019', 'ddd-DD-MM-YYYY')
    .add(12, 'hours')
    .toString()

const SUNDAY = moment(
    'Sun-21-07-2019',
    'ddd-DD-MM-YYYY'
).toString()

const TUESDAY = moment('Tue-23-07-2019', 'ddd-DD-MM-YYYY')

const TUESDAY_MIDDAY = moment(TUESDAY)
    .add(12, 'hours')
    .toString()

const roundTripFound = getRoundTripsOverWeekendFromTo(
    FRIDAY,
    SUNDAY
)

test('leaving friday, back sunday, round trip found', () => {
    expect(roundTripFound).toEqual(
        getCorrectRoundTripFromTo(FRIDAY, SUNDAY)
    )
})

const roundTripNotFound = getRoundTripsOverWeekendFromTo(
    TUESDAY_MIDDAY,
    FRIDAY
)

test('leaving tuesday, back friday, no round trip found', () => {
    expect(roundTripNotFound).toEqual([])
})

const roundTripFridayTuesday = getRoundTripsOverWeekendFromTo(
    FRIDAY,
    TUESDAY_MIDDAY
)

test('leaving friday, back tuesday, round trip found', () => {
    expect(roundTripFridayTuesday).toEqual(
        getCorrectRoundTripFromTo(FRIDAY, TUESDAY_MIDDAY)
    )
})

const roundTripSaturdaySunday = getRoundTripsOverWeekendFromTo(
    SATURDAY,
    SUNDAY
)

test('leaving saturday, back sunday, round trip found', () => {
    expect(roundTripSaturdaySunday).toEqual(
        getCorrectRoundTripFromTo(SATURDAY, SUNDAY)
    )
})
