import moment from 'moment'
export interface SelectedStations {
    [name: string]: boolean
}
export interface ExtremumTime {
    min: number
    max: number
}
export interface ExtremumPrice {
    lowest: number
    highest: number
}
export interface SelectedOriginDestinationStations {
    selectedOriginStations: SelectedStations
    selectedDestinationsStations: SelectedStations
}
export interface Times {
    directOnly: boolean
    extremumTravelTime: ExtremumTime
    maxTravelTime: number
    backArrivalTime: [number, number]
    thereDepartureTime: [number, number]
}
export interface Prices {
    maxPrice: number
    lowestAndHighestRoundTripPrice: ExtremumPrice
}
export interface Event {
    id: any
    title: string
    start: any
    end: any
}
export interface Information {
    origin: [
        {
            name: string
            id: string
        }
    ]
    destination: [
        {
            id: string
            name: string
        }
    ]
    departure: moment.Moment
    arrival: moment.Moment
    price: number
    url: string
}
export interface SelectedEventInformation {
    there: Information
    back: Information
}
