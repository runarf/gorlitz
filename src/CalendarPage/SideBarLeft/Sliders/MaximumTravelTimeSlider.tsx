import React, { FC } from 'react'
import { Grid, Typography, Slider } from '@material-ui/core'
import moment from 'moment'
export const MaximumTravelTimeSlider: FC<{
    timesDispatcher: any
    times: any
}> = ({ timesDispatcher, times }) => {
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
    return (
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
    )
}
