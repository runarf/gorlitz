import React, {
    //useEffect,
    useState,
} from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import FrontPage from './StartPage/'
import CalendarPage from './CalendarPage/'
//import RoundTrips from './roundTripPrices'
import axios from 'axios'

const backendURL = process.env.REACT_APP_BACKEND_URL

const App = () => {
    const [roundTrips, setRoundTrips] = useState([])
    console.log(process.env)
    const handleSetRoundTrips = async id => {
        try {
            const response = await axios.get(
                `${backendURL}${id}`
            )
            if (response.data) {
                setRoundTrips(previousRoundTrips => {
                    return [
                        ...response.data,
                        ...previousRoundTrips,
                    ]
                })
            } else {
                console.log('No response data received')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="App" style={{ width: '100%' }}>
            <Router basename={process.env.PUBLIC_URL}>
                <Route
                    path="/"
                    exact
                    render={props => (
                        <FrontPage
                            {...props}
                            handleSetRoundTrips={
                                handleSetRoundTrips
                            }
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
    )
}

export default App
