import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { withRouter } from 'react-router-dom'
import { Box, Button, Grid } from '@material-ui/core'
import KilometersAway from './KilometersAway'
import Countries from './Countries/'
import DefaultRegions from './regionsWithConnectionToBerlin'
import getRegionsCloseToBerlin from './regions'

const StartPage = ({ history, handleSetRoundTrips }) => {
    const handleFormSubmit = (
        values,
        { setSubmitting }
    ) => {
        Object.entries(values).forEach(
            async ([regionId, regionIdBoolean]) => {
                if (regionIdBoolean) {
                    await handleSetRoundTrips(regionId)
                }
            }
        )
        console.log(JSON.stringify(values, null, 2))
        history.push('/calendar')
    }

    const [displaydRegions, setDisplaydRegions] = useState(
        DefaultRegions
    )

    const [
        maxKilometersAwayFromBerlin,
        setMaxKilometersAwayFromBerlin,
    ] = useState(200)

    useEffect(() => {
        const regionsCloseToBerlin = getRegionsCloseToBerlin(
            DefaultRegions,
            maxKilometersAwayFromBerlin
        )
        setDisplaydRegions(regionsCloseToBerlin)
    }, [maxKilometersAwayFromBerlin])

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
        >
            <Formik onSubmit={handleFormSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <Grid container alignItems="center">
                            <KilometersAway
                                maxKilometersAwayFromBerlin={
                                    maxKilometersAwayFromBerlin
                                }
                                setMaxKilometersAwayFromBerlin={
                                    setMaxKilometersAwayFromBerlin
                                }
                            />
                        </Grid>
                        <Countries
                            regionsByCountry={
                                displaydRegions
                            }
                        />
                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Grid>
    )
}

export default withRouter(StartPage)
