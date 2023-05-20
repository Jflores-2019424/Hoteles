import { EventList } from "../components/event/components/EventList"
import { HabitacionesList } from "../components/HabitacionesList"

export const Menu = () => {
  return (
    <>
      <h1>Menu</h1>
      <hr />
      <h1>Lista de Eventos</h1>
      <hr /> 
      <EventList/>
      <br />
      <h1>Habitaciones</h1>
      <hr />
      <HabitacionesList/>
    </>
  )
}
