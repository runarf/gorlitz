import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import FrontPage from "./StartPage/";
import CalendarPage from "./CalendarPage/";
import RoundTrips from "./roundTripPrices";

const App = () => {
  const [roundTrips, setRoundTrips] = useState([]);

  useEffect(() => {
    setRoundTrips(RoundTrips);
  }, []);

  return (
    <div className="App" style={{ width: "100%" }}>
      <Router basename={process.env.PUBLIC_URL}>
        <Route
          path="/"
          exact
          render={props => (
            <FrontPage
              {...props}
              roundTrips={roundTrips}
              setRoundTrips={setRoundTrips}
            />
          )}
        />
        <Route
          path="/calendar"
          render={props => (
            <CalendarPage
              {...props}
              roundTrips={roundTrips}
            />
          )}
        />
      </Router>
    </div>
  );
};

export default App;
