import React from 'react'
import {
    Checkbox,
    FormControlLabel,
    Grid,
    Typography,
} from '@material-ui/core'

const CheckBoxes = ({
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
            {Object.entries(stations).length > 0 &&
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
                )}
        </Grid>
    )
}

export default CheckBoxes
