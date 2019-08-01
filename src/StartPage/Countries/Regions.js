import React from 'react'
import {
    Box,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core'
import { Field } from 'formik'

const FormikCheckbox = ({ field, form, disabled }) => {
    const isDisabled =
        disabled !== undefined
            ? disabled
            : form.isSubmitting

    return <Checkbox disabled={isDisabled} {...field} />
}

const CheckBoxes = ({ regions }) => {
    //console.log(regions)
    return (
        <Box display="flex" flexWrap="wrap">
            {regions.map((region, regionIndex) => (
                <Box key={regionIndex}>
                    <Field name={region.id}>
                        {({ field, form }) => (
                            <FormControlLabel
                                control={
                                    <FormikCheckbox
                                        field={field}
                                        form={form}
                                    />
                                }
                                label={region.name}
                            />
                        )}
                    </Field>
                </Box>
            ))}
        </Box>
    )
}

export default CheckBoxes
