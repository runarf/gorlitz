import React, { FC, Dispatch } from 'react'
import { Typography, Grid, Slider } from '@material-ui/core'
import { valueLabelFormat } from '.'
import { TimesActions } from '../../reducers/times'

export const DepartureTimeSlider: FC<{
    timesDispatcher: Dispatch<TimesActions>
}> = ({ timesDispatcher }) => (
    <Grid item xs={12} container direction="column">
        <Grid item>
            <Typography>Departure Time:</Typography>
        </Grid>
        <Grid item xs={12}>
            <Slider
                defaultValue={[0, 48]}
                valueLabelDisplay="auto"
                marks
                min={0}
                max={48}
                valueLabelFormat={valueLabelFormat(
                    'Friday'
                )}
                onChange={(event, value) => {
                    const valueAs = value as [
                        number,
                        number
                    ]
                    timesDispatcher({
                        type: 'SET_THERE_DEPARTURE_TIME',
                        value: valueAs,
                    })
                }}
            />
        </Grid>
    </Grid>
)
