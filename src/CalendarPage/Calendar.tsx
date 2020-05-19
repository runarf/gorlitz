import React from 'react'
import moment from 'moment-timezone'
import {
    Calendar,
    momentLocalizer,
} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    calli: {
        height: '100vh',
        width: '100%',
    },
})

const localizer = momentLocalizer(moment)

const MyCalendar = ({ events, onSelectEvent }) => {
    const classes = useStyles()
    return (
        <Grid container justify="center">
            <Grid item xs={12}>
                <Calendar
                    className={classes.calli}
                    localizer={localizer}
                    events={events}
                    defaultDate={new Date()}
                    defaultView="month"
                    onSelectEvent={onSelectEvent}
                    culture="es"
                />
            </Grid>
        </Grid>
    )
}

export default MyCalendar
