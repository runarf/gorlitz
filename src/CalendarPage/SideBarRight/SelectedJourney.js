import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Stations from './Stations'
import Emoji from 'a11y-react-emoji'

const OneWay = ({ oneWay }) => {
    const originStations = oneWay.origin.map(origin =>
        origin.name
            .replace('Berlin ', '')
            .replace('central bus station', 'ZOB')
    )
    const destinationStations = oneWay.destination.map(
        destination =>
            destination.name
                .replace('Berlin ', '')
                .replace('central bus station', 'ZOB')
    )
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
                    <Stations
                        originStations={originStations}
                        destinationStations={
                            destinationStations
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {oneWay.price}{' '}
                        <Emoji symbol="💶" label="Euro" />
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
                        <Emoji
                            symbol="🛒"
                            label="Shopping cart"
                        />
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
