import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

const OneWay = ({ oneWay }) => {
    return (
        <Grid item xs={12}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                alignContent="center"
            >
                <Grid item xs={12}>
                    <Typography>
                        {`${oneWay.origin.name} - ${
                            oneWay.destination.name
                        }`}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {oneWay.price} €
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {oneWay.departure.format(
                            'dddd HH:mm'
                        )}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {oneWay.arrival.format(
                            'dddd HH:mm'
                        )}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <a href={oneWay.url}>
                        <ShoppingCart />
                    </a>
                </Grid>
            </Grid>
        </Grid>
    )
}

const SelectedJourney = ({ selectedEvent }) => {
    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            alignContent="space-around"
            justify="center"
            style={{ height: '100%' }}
        >
            <OneWay oneWay={selectedEvent.there} />
            <OneWay oneWay={selectedEvent.back} />
        </Grid>
    )
}

export default SelectedJourney
