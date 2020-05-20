import React, { FC } from 'react'
import {
    Box,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core'
import { useField } from 'formik'
import { Region } from '../regionsWithConnectionToBerlin'

// TODO: Use formik hooks
const FormikCheckbox = ({ name }) => {
    const [field] = useField(name)

    return <Checkbox {...field} />
}

const CheckBoxes: FC<{ regions: Region[] }> = ({
    regions,
}) => {
    return (
        <Box display="flex" flexWrap="wrap">
            {regions.map((region, regionIndex) => (
                <Box key={regionIndex}>
                    <FormControlLabel
                        control={
                            <FormikCheckbox
                                name={region.id}
                            />
                        }
                        label={region.name}
                    />
                </Box>
            ))}
        </Box>
    )
}

export default CheckBoxes
