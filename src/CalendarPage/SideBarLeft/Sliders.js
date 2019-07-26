import React from 'react'
import { Grid, Slider } from '@material-ui/core'

const Sliders = ({
    timesDispatcher,
    prices,
    pricesDispatcher,
}) => {
    return (
        <Grid
            container
            direction="column"
            alignContent="center"
            spacing={2}
        >
            <Grid item xs={10}>
                Departure Time: <br />
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
            <Grid item xs={10}>
                Return Departure Time: <br />
                <Slider
                    defaultValue={[0, 48]}
                    valueLabelDisplay="auto"
                    marks
                    min={0}
                    max={48}
                    onChange={(event, value) =>
                        timesDispatcher({
                            type: 'SET_BACK_ARRIVAL_TIME',
                            value,
                        })
                    }
                />
            </Grid>
            <Grid item xs={10}>
                Maximum travel time:
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
            <Grid item xs={10}>
                Maximum prize:
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
    )
}

export default Sliders
