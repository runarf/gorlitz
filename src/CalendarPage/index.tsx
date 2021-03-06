import React, {
    useState,
    useEffect,
    useReducer,
    FC,
} from 'react'
import applyFilters from './filters'
import moment from 'moment'
import convertJourneyToEvent from './convertJourneyToEvent'

import { Grid, makeStyles } from '@material-ui/core'

import Calendar from './Calendar'
import SideBarLeft from './SideBarLeft'
import SideBarRight from './SideBarRight'
import pricesReducer, {
    pricesInitialState,
    setExtremumRoundTripPrice,
} from './reducers/prices'
import {
    timesInitialState,
    timesReducer,
    setExtremumTravelTime,
} from './reducers/times'
import stationsReducer, {
    stationsInitialValues,
    setSelectedOriginStations,
    setSelectedDestinationStations,
} from './reducers/stations'

import { ThereAndBackWithPrice } from '../TripInterfaces'
import {
    Event,
    SelectedEventInformation,
} from './Interfaces'

const useStyles = makeStyles((themes) => ({
    drawer: {},
}))

const CalendarPage: FC<{
    roundTrips: ThereAndBackWithPrice[]
}> = ({ roundTrips }) => {
    const classes = useStyles()

    const [stations, stationsDispatcher] = useReducer(
        stationsReducer,
        stationsInitialValues
    )

    const timesMachine = useReducer(
        timesReducer,
        timesInitialState
    )
    const [times, timesDispatcher] = timesMachine

    const [prices, pricesDispatcher] = useReducer(
        pricesReducer,
        pricesInitialState
    )

    const [events, setEvents] = useState<Event[]>([])
    const [selectedEvent, setSelectedEvent] = useState<
        SelectedEventInformation | undefined
    >()

    const [
        displaydJourneys,
        setDisplaydJourneys,
    ] = useState<ThereAndBackWithPrice[]>([])

    useEffect(() => {
        setSelectedOriginStations(
            stationsDispatcher,
            roundTrips
        )

        setSelectedDestinationStations(
            stationsDispatcher,
            roundTrips
        )

        setExtremumTravelTime(timesDispatcher, roundTrips)

        setExtremumRoundTripPrice(
            pricesDispatcher,
            roundTrips
        )
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

    const onSelectEvent = (event: Event) => {
        const selectedJourney = displaydJourneys[event.id]
        const { there, back } = selectedJourney
        const information: SelectedEventInformation = {
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
