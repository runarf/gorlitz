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
            style={{ height: '100%' }}
            justify="space-around"
        >
            <Grid item>
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
            <Grid item>
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
            <Grid item>
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
