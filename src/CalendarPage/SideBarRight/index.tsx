import React, { FC } from 'react'
import SelectedJourney from './SelectedJourney'
import { SelectedEventInformation } from '..'

const SideBarRight: FC<{
    selectedEvent: SelectedEventInformation | undefined
    style: any
}> = ({ selectedEvent, style }) => {
    if (!selectedEvent) return null
    return (
        <div>
            {Object.entries(selectedEvent).length > 0 && (
                <SelectedJourney
                    selectedEvent={selectedEvent}
                />
            )}
        </div>
    )
}

export default SideBarRight
