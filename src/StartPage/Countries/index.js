import React from "react";
import {
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import regionsByCountry from "../regionsCloseToBerlin";
import CheckBoxes from "./Regions";

const Countries = () => {
  return (
    <Box display="flex" flexWrap="wrap">
      {Object.entries(regionsByCountry).map(
        ([country, regions], countryIndex) => (
          <Box key={countryIndex}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
              >
                {country}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <CheckBoxes regions={regions} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Box>
        )
      )}
    </Box>
  );
};

export default Countries;
