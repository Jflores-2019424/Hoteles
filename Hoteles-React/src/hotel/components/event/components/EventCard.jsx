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
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-8">
            <div className="card-body">
            {events.map((eventActual) => (
              <div key={eventActual._id}>
                <h5 className="card-title">{eventActual.name}</h5>
                <p>invitados: {eventActual.guests}</p>
              </div>
            ))}

            <p className="card-text">
              <small className="text-muted"></small>
            </p>

            <Link to="/more">Mas...</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
