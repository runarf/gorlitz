import React from 'react'
import { Grid, Slider, Typography } from '@material-ui/core'

const Sliders = ({
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
                        onChange={(event, value) =>
                            timesDispatcher({
                                type:
                                    'SET_THERE_DEPARTURE_TIME',
                                value,
                            })
                        }
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} container direction="column">
                <Grid item>
                    <Typography>
                        Return Departure Time:
                    </Typography>
                </Grid>
                <Grid item>
                    <Slider
                        defaultValue={[0, 48]}
                        valueLabelDisplay="auto"
                        marks
                        min={0}
                        max={48}
                        onChange={(event, value) =>
                            timesDispatcher({
                                type:
                                    'SET_BACK_ARRIVAL_TIME',
                                value,
                            })
                        }
                    />
                </Grid>
            </Grid>
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
                        min={0}
                        max={24}
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
