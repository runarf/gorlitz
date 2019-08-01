import React from 'react'
import { Grid } from '@material-ui/core'
import CheckBoxes from './Checkboxes'
import Sliders from './Sliders'

const SideBarLeft = ({
    style,
    stationsDispatcher,
    stations,
    timesDispatcher,
    pricesDispatcher,
    prices,
}) => {
    const handleChangeSelectedOriginStations = name => event => {
        stationsDispatcher({
            type: 'SET_SELECTED_ORIGIN_STATIONS',
            value: {
                [name]: event.target.checked,
            },
        })
    }

    const handleChangeSelectedDestinations = name => event => {
        stationsDispatcher({
            type: 'SET_SELECTED_DESTINATIONS_STATIONS',
            value: {
                [name]: event.target.checked,
            },
        })
    }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            style={{ height: '100%' }}
        >
            <Grid item xs>
                <CheckBoxes
                    title="Destinations"
                    stations={
                        stations.selectedDestinationsStations
                    }
                    handleChangeSelectedStations={
                        handleChangeSelectedDestinations
                    }
                />
            </Grid>
            <Grid item xs>
                <CheckBoxes
                    title="Origins"
                    stations={
                        stations.selectedOriginStations
                    }
                    handleChangeSelectedStations={
                        handleChangeSelectedOriginStations
                    }
                />
            </Grid>
            <Grid item xs>
                <Sliders
                    prices={prices}
                    pricesDispatcher={pricesDispatcher}
                    timesDispatcher={timesDispatcher}
                />
            </Grid>
        </Grid>
    )
}

export default SideBarLeft
