import React, { useEffect, useState, FC } from 'react'
import { Formik, Form } from 'formik'
import { useHistory } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import KilometersAway from './KilometersAway'
import Countries from './Countries'
import {
    regionsByCountry,
    RegionsByCountry,
} from './regionsWithConnectionToBerlin'
import getRegionsCloseToBerlin from './getRegionsCloseToBerlin'

const StartPage: FC<{
    handleSetRoundTrips: (regionId: string) => Promise<void>
}> = ({ handleSetRoundTrips }) => {
    const history = useHistory()
    const handleFormSubmit = (values: {
        [stationId: string]: boolean
    }) => {
        Object.entries(values).forEach(
            async ([regionId, regionIsChecked]) => {
                if (regionIsChecked) {
                    await handleSetRoundTrips(regionId)
                }
            }
        )

        history.push('/calendar')
    }

    const [
        displaydRegionsByCountry,
        setDisplaydRegionsByCountry,
    ] = useState<RegionsByCountry>(regionsByCountry)

    const [
        maxKilometersAwayFromBerlin,
        setMaxKilometersAwayFromBerlin,
    ] = useState(200)

    useEffect(() => {
        const regionsCloseToBerlin = getRegionsCloseToBerlin(
            regionsByCountry,
            maxKilometersAwayFromBerlin
        )
        setDisplaydRegionsByCountry(regionsCloseToBerlin)
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
                                displaydRegionsByCountry
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

export default StartPage
