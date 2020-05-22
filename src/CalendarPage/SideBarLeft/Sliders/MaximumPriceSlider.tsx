import React, { FC } from 'react'
import { Grid, Typography, Slider } from '@material-ui/core'

export const MaximumPriceSlider: FC<{
    pricesDispatcher: any
    prices
}> = ({ pricesDispatcher, prices }) => (
    <Grid item xs={12} container direction="column">
        <Grid item>
            <Typography>Maximum prize:</Typography>
        </Grid>
        <Grid item>
            <Slider
                defaultValue={50}
                valueLabelDisplay="auto"
                min={
                    prices.lowestAndHighestRoundTripPrice
                        .lowest
                }
                max={
                    prices.lowestAndHighestRoundTripPrice
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
