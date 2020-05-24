import React, { FC, Dispatch } from 'react'
import { Grid } from '@material-ui/core'
import moment from 'moment'
import { DepartureTimeSlider } from './DepartureTimeSlider'
import { ReturnDepartureTimeSlider } from './ReturnDepartureTimeSlider'
import { MaximumTravelTimeSlider } from './MaximumTravelTimeSlider'
import { MaximumPriceSlider } from './MaximumPriceSlider'
import { Times, TimesActions } from '../../reducers/times'
import {
    Prices,
    PricesActions,
} from '../../reducers/prices'

const Sliders: FC<{
    times: Times
    timesDispatcher: Dispatch<TimesActions>
    prices: Prices
    pricesDispatcher: Dispatch<PricesActions>
}> = ({
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
                timesReducer={[times, timesDispatcher]}
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
