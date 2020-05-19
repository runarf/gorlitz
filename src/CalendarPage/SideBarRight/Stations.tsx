import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Emoji from 'a11y-react-emoji'

const Stationz = ({ stations }) => {
    return stations.map((station, index) => (
        <Grid
            key={index}
            item
            xs={12}
            container
            justify="center"
        >
            <Typography>{station}</Typography>
        </Grid>
    ))
}

const Stations = ({
    originStations,
    destinationStations,
}) => {
    return (
        <Grid container justify="center">
            <Grid item xs={12}>
                <Stationz stations={originStations} />
            </Grid>
            <Grid item xs={12} container justify="center">
                <Emoji symbol="⬇️" label="arrow down" />
            </Grid>
            <Grid item xs={12}>
                <Stationz stations={destinationStations} />
            </Grid>
        </Grid>
    )
}

export default Stations
