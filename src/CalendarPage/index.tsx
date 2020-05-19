import React, {
    useState,
    useEffect,
    useReducer,
    FC,
} from 'react'
import applyFilters from './filters'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import convertJourneyToEvent from './convertJourneyToEvent'

import { Grid, makeStyles } from '@material-ui/core'

import Calendar from './Calendar'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import {
    pricesInitialState,
    pricesReducer,
    timesInitialState,
    timesReducer,
    stationsReducer,
    stationsInitialValues,
} from './reducers'

import {
    getExtremumRoundTripTravelTime,
    getMaxAndMinRoundTripPrice,
    getOriginStations,
    getDestinationStations,
} from './initializeForm'
import { RoundTripWithPrice } from '../roundTrips'

momentDurationFormatSetup(moment)

const useStyles = makeStyles((themes) => ({
    drawer: {},
}))

const CalendarPage: FC<{
    roundTrips: RoundTripWithPrice[]
}> = ({ roundTrips }) => {
    const classes = useStyles()

    const [stations, stationsDispatcher] = useReducer(
        stationsReducer,
        stationsInitialValues
    )

    const [times, timesDispatcher] = useReducer(
        timesReducer,
        timesInitialState
    )

    const [prices, pricesDispatcher] = useReducer(
        pricesReducer,
        pricesInitialState
    )

    const [events, setEvents] = useState([])
    const [selectedEvent, setSelectedEvent] = useState({
        //...initialEvent,
    })

    const [
        displaydJourneys,
        setDisplaydJourneys,
    ] = useState([])

    useEffect(() => {
        const originStations = getOriginStations(roundTrips)
        stationsDispatcher({
            type: 'SET_SELECTED_ORIGIN_STATIONS',
            value: originStations.reduce(
                (stations, station) => {
                    if (stations[station] === undefined) {
                        stations[station] = true
                    }
                    return stations
                },
                {}
            ),
        })

        const destinations = getDestinationStations(
            roundTrips
        )
        stationsDispatcher({
            type: 'SET_SELECTED_DESTINATIONS_STATIONS',
            value: destinations.reduce(
                (stations, station) => {
                    if (stations[station] === undefined) {
                        stations[station] = true
                    }
                    return stations
                },
                {}
            ),
        })

        const extremumRoundTripTravelTime = getExtremumRoundTripTravelTime(
            roundTrips
        )

        timesDispatcher({
            type: 'SET_EXTREMUM_TRAVEL_TIME',
            value: extremumRoundTripTravelTime,
        })

        const maxAndMinRoundTripPrice = getMaxAndMinRoundTripPrice(
            roundTrips
        )

        pricesDispatcher({
            type: 'SET_LOWEST_AND_HIGHEST_ROUND_TRIP_PRICE',
            value: maxAndMinRoundTripPrice,
        })
    }, [roundTrips])

    useEffect(() => {
        const journeysMatchingFilter = applyFilters({
            stations,
            roundTrips,
            times,
            maxPrice: prices.maxPrice,
        })

        setDisplaydJourneys(journeysMatchingFilter)
        const events = convertJourneyToEvent(
            journeysMatchingFilter
        )

        setEvents(events)
    }, [roundTrips, stations, times, prices.maxPrice])

    const onSelectEvent = (event) => {
        const selectedJourney = displaydJourneys[
            event.id
        ] as any
        const there = selectedJourney.there
        const back = selectedJourney.back
        const information = {
            there: {
                origin: there.origin,
                destination: there.destination,
                departure: moment(there.departure),
                arrival: moment(there.arrival),
                price: there.price,
                url: there.url,
            },
            back: {
                origin: back.origin,
                destination: back.destination,
                departure: moment(back.departure),
                arrival: moment(back.arrival),
                price: back.price,
                url: back.url,
            },
        }
        setSelectedEvent(information)
    }

    return (
        <Grid container justify="center" spacing={2}>
            <Grid item xs={2}>
                <SideBarLeft
                    style={classes.drawer}
                    stations={stations}
                    stationsDispatcher={stationsDispatcher}
                    timesDispatcher={timesDispatcher}
                    times={times}
                    pricesDispatcher={pricesDispatcher}
                    prices={prices}
                />
            </Grid>
            <Grid item xs>
                <Calendar
                    events={events}
                    onSelectEvent={onSelectEvent}
                />
            </Grid>
            <Grid item xs={2}>
                <SideBarRight
                    style={classes.drawer}
                    selectedEvent={selectedEvent}
                />
            </Grid>
        </Grid>
    )
}

export default CalendarPage
