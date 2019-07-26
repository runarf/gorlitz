import React from 'react'
import {
    Checkbox,
    FormControlLabel,
    Grid,
} from '@material-ui/core'

const CheckBoxes = ({
    stations,
    handleChangeSelectedStations,
    title,
}) => {
    return (
        <Grid container direction="column">
            {title}
            {Object.entries(stations).length > 0 &&
                Object.entries(stations).map(
                    ([station, checked], index) => (
                        <Grid item xs={12}>
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChangeSelectedStations(
                                            station
                                        )}
                                    />
                                }
                                label={station}
                            />
                        </Grid>
                    )
                )}
        </Grid>
    )
}

export default CheckBoxes
