import React from 'react'
import {
    Grid,
    Slider,
    Typography,
    makeStyles,
} from '@material-ui/core'
import moment from 'moment'
import { DepartureTimeSlider } from './DepartureTimeSlider'
import { ReturnDepartureTimeSlider } from './ReturnDepartureTimeSlider'
import { MaximumTravelTimeSlider } from './MaximumTravelTimeSlider'

const useStyles = makeStyles({
    valueLabel: {},
})

const Sliders = ({
    times,
    timesDispatcher,
    prices,
    pricesDispatcher,
}) => {
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
            <MaximumTravelTimeSlider
                timesDispatcher={timesDispatcher}
                times={times}
            />
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
