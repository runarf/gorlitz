import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { withRouter } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import KilometersAway from './KilometersAway'
import Countries from './Countries'
import DefaultRegions from './regionsWithConnectionToBerlin'
import getRegionsCloseToBerlin from './getRegionsCloseToBerlin'

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

    const [displaydRegions, setDisplaydRegions] = useState<
        any
    >(DefaultRegions)

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
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={{}}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <KilometersAway
                            maxKilometersAwayFromBerlin={
                                maxKilometersAwayFromBerlin
                            }
                            setMaxKilometersAwayFromBerlin={
                                setMaxKilometersAwayFromBerlin
                            }
                        />
                        <Countries
                            regionsByCountry={
                                displaydRegions
                            }
                        />
                        <Grid
                            item
                            container
                            justify="center"
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Grid>
    )
}

export default withRouter(StartPage)
