import React, { FC } from 'react'
import {
    Checkbox,
    FormControlLabel,
    Grid,
    Typography,
    CircularProgress,
} from '@material-ui/core'
import { SelectedStations } from '../reducers/stations'

const CheckBoxes: FC<{
    stations: SelectedStations
    handleChangeSelectedStations
    title
}> = ({
    stations,
    handleChangeSelectedStations,
    title,
}) => {
    return (
        <Grid
            container
            direction="column"
            alignItems="flex-start"
        >
            <Grid item xs>
                <Typography>{title}</Typography>
            </Grid>
            {Object.entries(stations).length > 0 ? (
                Object.entries(stations).map(
                    ([station, checked], index) => {
                        return (
                            <Grid key={index} item xs>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={
                                                !!checked
                                            }
                                            onChange={handleChangeSelectedStations(
                                                station
                                            )}
                                        />
                                    }
                                    label={station}
                                />
                            </Grid>
                        )
                    }
                )
            ) : (
                <CircularProgress />
            )}
        </Grid>
    )
}

export default CheckBoxes
