import { Navigate, Routes, Route } from "react-router-dom"  
import { LoginPage, Register } from "../auth/"
import { HotelRoutes, Menu } from "../hotel"

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<Register/>}/>

            <Route path="/*" element={<HotelRoutes/>}/>

        </Routes>
    </>
  )
}
