import { Navigate, Routes, Route } from "react-router-dom"  
import { LoginPage, Register } from "../auth/"
import { HotelRoutes, Menu } from "../hotel"
import { EventPages } from "../hotel/components/event/components/eventPages"
import { EventAdd } from "../hotel/components/event/components/EventAdd"

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="event/:id" element={<EventPages/>}/>
            <Route path="/*" element={<HotelRoutes/>}/>
            <Route path="eventadd" element={<EventAdd/>}/>
        </Routes>
    </>
  )
}
