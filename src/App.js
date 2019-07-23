import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import FrontPage from "./FrontPage";
import ChoosePage from "./ChoosePage";

const App = () => {
  const [roundTrips, setRoundTrips] = useState([]);
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
            <ChoosePage
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
