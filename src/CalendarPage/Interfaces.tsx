import moment from 'moment'

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
