import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { listEvent } from "../api/Event.Api"

export const EventCard = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await listEvent()
      setEvents(result)
    }

    fetchData()
  }, [])

  return (
    <div className="col animate_animated animate_fadeIn">
      {events.map((eventActual) => (
        <div className="card mt-3" key={eventActual._id}>
          <div className="row no-gutters">
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{eventActual.name}</h5>
                <p className="card-text">Fecha de reservación: {eventActual.date}</p>
                <Link to={`/event/${eventActual._id}`}>Más...</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}