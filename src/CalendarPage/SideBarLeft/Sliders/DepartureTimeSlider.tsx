import React, { FC } from 'react'
import { Typography, Grid, Slider } from '@material-ui/core'
import { valueLabelFormat } from '.'

export const DepartureTimeSlider: FC<{
    timesDispatcher: any
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
                onChange={(event, value) =>
                    timesDispatcher({
                        type: 'SET_THERE_DEPARTURE_TIME',
                        value,
                    })
                }
            />
        </Grid>
    </Grid>
)
