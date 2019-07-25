import React from "react";
import { Formik, Form } from "formik";
import { withRouter } from "react-router-dom";
import { Box, Button } from "@material-ui/core";

import Countries from "./Countries/";

const StartPage = ({ history, handleSetRoundTrips }) => {
  const handleFormSubmit = (values, { setSubmitting }) => {
    Object.entries(values).forEach(async ([key, value]) => {
      if (value) {
        await handleSetRoundTrips(key);
      }
    });
    console.log(JSON.stringify(values, null, 2));
    history.push("/calendar");
  };
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Formik onSubmit={handleFormSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Countries />
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

export default withRouter(StartPage);
