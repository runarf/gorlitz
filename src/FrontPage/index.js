import React from "react";
//import ChoosePage from "../ChoosePage";
import { Formik, Form, Field } from "formik";
import { withRouter } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  FormControlLabel
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import regionsByCountry from "./regionsCloseToBerlin";
import axios from "axios";

const FormikCheckbox = ({ field, form, disabled }) => {
  const isDisabled =
    disabled !== undefined ? disabled : form.isSubmitting;

  return <Checkbox disabled={isDisabled} {...field} />;
};

const FrontPage = ({
  history,
  roundTrips,
  setRoundTrips
}) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Formik
          onSubmit={(values, { setSubmitting }) => {
            Object.entries(values).forEach(
              ([key, value]) => {
                axios
                  .get(`https://flixi.herokuapp.com/${key}`)
                  .then(rt => {
                    debugger;
                    const latestRoundTrips = [
                      ...roundTrips,
                      ...rt.data
                    ];
                    setRoundTrips(latestRoundTrips);
                  })
                  .catch(err => console.log(err));
              }
            );
            console.log(JSON.stringify(values, null, 2));
            history.push("/calendar");
          }}
        >
          {({ isSubmitting }) => (
            <Form>
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
                          <Box
                            display="flex"
                            flexWrap="wrap"
                          >
                            {regions.map(
                              (region, regionIndex) => (
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
                              )
                            )}
                          </Box>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </Box>
                  )
                )}
              </Box>
              <Box display="flex" justifyContent="center">
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
      </Box>
    </>
  );
};

export default withRouter(FrontPage);
