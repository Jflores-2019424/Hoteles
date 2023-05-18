import { EventCard } from '../components/EventCard'

export const EventList = () => {

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        <div>
          {
            <EventCard/>
          }
        </div>
    </div>
  )
}