import React, { useMemo } from 'react'
import { EventCard } from './EventCard'
import { listEvent } from '../api/Event.Api'

export const EventList = () => {

    const event = useMemo(() => listEvent())

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        <div>
          <li>
          <EventCard/>
          </li>
        </div>
    </div>
  )
}