import React, { FC } from 'react'
import {
    Grid,
    Slider,
    Typography,
    makeStyles,
} from '@material-ui/core'
import moment from 'moment'
import { DepartureTimeSlider } from './DepartureTimeSlider'
import { ReturnDepartureTimeSlider } from './ReturnDepartureTimeSlider'

const useStyles = makeStyles({
    valueLabel: {},
})

const Sliders = ({
    times,
    timesDispatcher,
    prices,
    pricesDispatcher,
}) => {
    const minTravelTime = Math.floor(
        moment
            .duration(times.extremumTravelTime.min)
            .asHours()
    )
    const maxTravelTime = Math.ceil(
        moment
            .duration(times.extremumTravelTime.max)
            .asHours()
    )

    const classes = useStyles()
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
        >
            <DepartureTimeSlider
                timesDispatcher={timesDispatcher}
            />
            <ReturnDepartureTimeSlider
                timesDispatcher={timesDispatcher}
            />
            <Grid item xs={12} container direction="column">
                <Grid item>
                    <Typography>
                        Maximum travel time:
                    </Typography>
                </Grid>
                <Grid item>
                    <Slider
                        defaultValue={24}
                        valueLabelDisplay="auto"
                        marks
                        min={minTravelTime}
                        max={maxTravelTime}
                        onChange={(event, value) =>
                            timesDispatcher({
                                type: 'SET_MAX_TRAVEL_TIME',
                                value,
                            })
                        }
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} container direction="column">
                <Grid item>
                    <Typography>Maximum prize:</Typography>
                </Grid>
                <Grid item>
                    <Slider
                        defaultValue={50}
                        valueLabelDisplay="auto"
                        min={
                            prices
                                .lowestAndHighestRoundTripPrice
                                .lowest
                        }
                        max={
                            prices
                                .lowestAndHighestRoundTripPrice
                                .highest
                        }
                        marks
                        onChange={(event, value) =>
                            pricesDispatcher({
                                type: 'SET_MAX_PRICE',
                                value,
                            })
                        }
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Sliders

export const valueLabelFormat = (day) => (value) => {
    const friday = moment()
        .isoWeekday(day)
        .startOf('day')
        .add(value, 'hours')
    const display = friday.format('dd HH')
    return display
}
