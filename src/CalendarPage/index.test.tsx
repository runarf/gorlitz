import React from 'react'
import { render } from '@testing-library/react'
import CalendarPage from '.'

test('CalendarPage renders', () => {
    render(<CalendarPage roundTrips={[]} />)
})
