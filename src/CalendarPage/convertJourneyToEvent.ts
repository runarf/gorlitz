import moment, { Duration } from 'moment'
import { Event } from './Interfaces'

const convertJourneyToEvent = (journeys) => {
    const events: Event[] = journeys.map(
        (journey, index) => {
            const travelTimeThere = moment.duration(
                moment(journey.there.arrival).diff(
                    moment(journey.there.departure)
                )
            )

            const travelTimeBack = moment.duration(
                moment(journey.back.arrival).diff(
                    moment(journey.back.departure)
                )
            )

            const event: Event = {
                id: index,
                title: `${Math.ceil(
                    journey.price
                )} € ${formatDuration(
                    travelTimeThere
                )} ${formatDuration(travelTimeBack)}`,
                start: moment(
                    journey.there.departure
                ).toDate(),
                end: moment(journey.back.arrival).toDate(),
            }
            return event
        }
    )

    return events
}

const formatDuration = (duration: Duration) =>
    moment.utc(duration.as('milliseconds')).format('HH:mm')

export default convertJourneyToEvent
