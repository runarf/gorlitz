import React from 'react'
import { render } from '@testing-library/react'
import { App } from './App'

test('App renders', () => {
    const r = render(<App />)
    r.getByText('Max distance from Berlin in kilometers')
})
