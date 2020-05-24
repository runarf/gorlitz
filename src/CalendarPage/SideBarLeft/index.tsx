import React, { FC, Dispatch } from 'react'
import {
    Grid,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core'
import CheckBoxes from './Checkboxes'
import Sliders from './Sliders'
import {
    SelectedOriginDestinationStations,
    Prices,
} from '../Interfaces'
import { StationsActions } from '../reducers/stations'
import { Times, TimesActions } from '../reducers/times'
import { PricesActions } from '../reducers/prices'

const SideBarLeft: FC<{
    stationsDispatcher: Dispatch<StationsActions>
    stations: SelectedOriginDestinationStations
    times: Times
    timesDispatcher: Dispatch<TimesActions>
    pricesDispatcher: Dispatch<PricesActions>
    prices: Prices
}> = ({
    stationsDispatcher,
    stations,
    times,
    timesDispatcher,
    pricesDispatcher,
    prices,
}) => {
    const handleChangeSelectedOriginStations = (name) => (
        event
    ) => {
        stationsDispatcher({
            type: 'SET_SELECTED_ORIGIN_STATIONS',
            stations: {
                [name]: event.target.checked,
            },
        })
    }

    const handleChangeSelectedDestinations = (name) => (
        event
    ) => {
        stationsDispatcher({
            type: 'SET_SELECTED_DESTINATIONS_STATIONS',
            stations: {
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
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={times.directOnly}
                            onChange={(event, value) => {
                                timesDispatcher({
                                    type:
                                        'SET_DIRECT_ONLY_BOOLEAN',
                                    value,
                                })
                            }}
                        />
                    }
                    label="Direct only"
                />
            </Grid>
            <Grid item>
                <Sliders
                    times={times}
                    prices={prices}
                    pricesDispatcher={pricesDispatcher}
                    timesDispatcher={timesDispatcher}
                />
            </Grid>
        </Grid>
    )
}

export default SideBarLeft
