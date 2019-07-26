const getDestinationStations = roundTrips => {
    const destinationStations = roundTrips.reduce(
        (stations, roundTrip) => {
            const station = roundTrip.there.destination.name
            if (stations.includes(station)) {
                return stations
            } else {
                return [...stations, station]
            }
        },
        []
    )
    return destinationStations
}

const getOriginStations = roundTrips => {
    const originStations = roundTrips.reduce(
        (stations, journey) => {
            const station = journey.there.origin.name
            if (stations.includes(station)) {
                return stations
            } else {
                return [...stations, station]
            }
        },
        []
    )
    return originStations
}

const getMaxAndMinRoundTripPrice = roundTrips => {
    const mostExpensiveRoundTripPrice = roundTrips.reduce(
        (maxAndMinRoundTripPrice, roundTrip) => {
            const price = roundTrip.price
            if (maxAndMinRoundTripPrice.lowest === 0) {
                maxAndMinRoundTripPrice.lowest = price
            }
            if (price > maxAndMinRoundTripPrice.highest) {
                return {
                    ...maxAndMinRoundTripPrice,
                    highest: price,
                }
            } else if (
                maxAndMinRoundTripPrice.lowest > price
            ) {
                return {
                    ...maxAndMinRoundTripPrice,
                    lowest: price,
                }
            } else {
                return maxAndMinRoundTripPrice
            }
        },
        {
            lowest: 0,
            highest: 0,
        }
    )

    return mostExpensiveRoundTripPrice
}

export {
    getMaxAndMinRoundTripPrice,
    getOriginStations,
    getDestinationStations,
}
