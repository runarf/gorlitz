export interface RoundTripWithPrice {
    price: number
    there: Trip
    back: Trip
}
export interface Trip {
    departure: string
    arrival: string
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
    price: number
    url: string
    isDirect: boolean
}
export interface RawTrips {
    there: Trip[]
    back: Trip[]
}
