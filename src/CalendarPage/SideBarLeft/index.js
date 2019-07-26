import React from 'react'
import { Drawer, Grid } from '@material-ui/core'
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
        <Drawer
            variant="permanent"
            anchor="left"
            className={style}
        >
            <Grid
                container
                direction="row"
                justify="center"
            >
                <Grid item xs={10}>
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
                <Grid item xs={10}>
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
                <Grid item xs={10}>
                    <Sliders
                        prices={prices}
                        pricesDispatcher={pricesDispatcher}
                        timesDispatcher={timesDispatcher}
                    />
                </Grid>
            </Grid>
        </Drawer>
    )
}

export default SideBarLeft
