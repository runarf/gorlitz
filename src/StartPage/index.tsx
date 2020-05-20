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
    handleSetRoundTrips: (id: string) => Promise<void>
}> = ({ handleSetRoundTrips }) => {
    const history = useHistory()
    const handleFormSubmit = (values: {
        [stationId: string]: boolean
    }) => {
        console.log(JSON.stringify(values))
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
        RegionsByCountry
    >(regionsByCountry)

    const [
        maxKilometersAwayFromBerlin,
        setMaxKilometersAwayFromBerlin,
    ] = useState(200)

    useEffect(() => {
        const regionsCloseToBerlin = getRegionsCloseToBerlin(
            regionsByCountry,
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

export default StartPage
