import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import FrontPage from './StartPage'
import CalendarPage from './CalendarPage'

import axios from 'axios'
import getRoundTrips, {
    RoundTripWithPrice,
} from './roundTrips'

const App = () => {
    const backendURL =
        // process.env.NODE_ENV !== 'production'
        //     ? 'http://localhost:4000/'
        //     :
        'https://flixi.herokuapp.com/'

    const [roundTrips, setRoundTrips] = useState<
        RoundTripWithPrice[]
    >([])

    useEffect(() => {
        //        setRoundTrips(RoundTrips)
        // const roundTrips = getRoundTrips(thereNback)
        // setRoundTrips(previousRoundTrips => [
        //     ...roundTrips,
        //     ...previousRoundTrips,
        // ])
    }, [])

    const handleSetRoundTrips = async (id) => {
        try {
            const response = await axios.get(
                `${backendURL}${id}`
            )
            if (response.data) {
                const roundTrips = await getRoundTrips(
                    response.data
                )

                const newRoundTrips = roundTrips
                setRoundTrips((previousRoundTrips) => {
                    return [
                        ...newRoundTrips,
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
                    render={(props) => (
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
                    render={(props) => (
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