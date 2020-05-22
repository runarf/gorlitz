import React from 'react'
import { Grid } from '@material-ui/core'
import moment from 'moment'
import { DepartureTimeSlider } from './DepartureTimeSlider'
import { ReturnDepartureTimeSlider } from './ReturnDepartureTimeSlider'
import { MaximumTravelTimeSlider } from './MaximumTravelTimeSlider'
import { MaximumPriceSlider } from './MaximumPriceSlider'

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
            <MaximumPriceSlider
                pricesDispatcher={pricesDispatcher}
                prices={prices}
            />
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
