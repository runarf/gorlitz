import React from 'react'
import SelectedJourney from './SelectedJourney'

const SideBarRight = ({ selectedEvent, style }) => {
    return (
        Object.entries(selectedEvent).length > 0 && (
            <SelectedJourney
                selectedEvent={selectedEvent}
            />
        )
    )
}

export default SideBarRight
