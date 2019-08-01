import React from 'react'
import {
    Grid,
    MenuItem,
    Input,
    Select,
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
        <Grid item xs>
            Max distance from Berlin
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
    )
}

export default KilometersAway
