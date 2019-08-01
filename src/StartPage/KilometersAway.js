import React from 'react'
import {
    Grid,
    MenuItem,
    Input,
    Select,
    Typography,
} from '@material-ui/core'

const kilometersFromBerlin = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000,
]

const KilometersAway = ({
    maxKilometersAwayFromBerlin,
    setMaxKilometersAwayFromBerlin,
}) => {
    return (
        <Grid item container justify="center">
            <Grid item xs={3}>
                <Typography>
                    Max distance from Berlin in kilometers
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Select
                    value={maxKilometersAwayFromBerlin}
                    onChange={event =>
                        setMaxKilometersAwayFromBerlin(
                            event.target.value
                        )
                    }
                    input={<Input name="km" />}
                >
                    {kilometersFromBerlin.map(
                        (kilometer, index) => (
                            <MenuItem
                                key={index}
                                value={kilometer}
                            >
                                {kilometer}
                            </MenuItem>
                        )
                    )}
                </Select>
            </Grid>
        </Grid>
    )
}

export default KilometersAway
