import React, { FC } from 'react'
import SelectedJourney from './SelectedJourney'

const SideBarRight: FC<{
    selectedEvent: any
    style: any
}> = ({ selectedEvent, style }) => {
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
