import React, { FC } from 'react'
import {
    Grid,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
//import regionsByCountry from '../regionsCloseToBerlin'
import CheckBoxes from './Regions'
import { RegionsByCountry } from '../regionsWithConnectionToBerlin'

const Countries: FC<{
    regionsByCountry: RegionsByCountry
}> = ({ regionsByCountry }) => {
    return (
        <Grid container item>
            {Object.entries(regionsByCountry).map(
                ([country, regions], countryIndex) =>
                    regions.length > 1 && (
                        <Grid item key={countryIndex}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={
                                        <ExpandMore />
                                    }
                                >
                                    {country}
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <CheckBoxes
                                        regions={regions}
                                    />
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    )
            )}
        </Grid>
    )
}

export default Countries
