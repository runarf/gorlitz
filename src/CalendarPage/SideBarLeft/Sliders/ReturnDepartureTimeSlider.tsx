import React, { FC, Dispatch } from 'react'
import { Typography, Slider, Grid } from '@material-ui/core'
import { valueLabelFormat } from '.'
import { TimesActions } from '../../reducers/times'

export const ReturnDepartureTimeSlider: FC<{
    timesDispatcher: Dispatch<TimesActions>
}> = ({ timesDispatcher }) => (
    <Grid item xs={12} container direction="column">
        <Grid item>
            <Typography>Return Departure Time:</Typography>
        </Grid>
        <Grid item>
            <Slider
                defaultValue={[0, 48]}
                valueLabelDisplay="auto"
                marks
                min={0}
                max={48}
                valueLabelFormat={valueLabelFormat(
                    'Sunday'
                )}
                onChange={(event, value) => {
                    const valueAs = value as [
                        number,
                        number
                    ]
                    timesDispatcher({
                        type: 'SET_BACK_ARRIVAL_TIME',
                        value: valueAs,
                    })
                }}
            />
        </Grid>
    </Grid>
)
