import { Navbar } from '../../ui';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Habitaciones, Menu, Eventos, Usuario, EventPage } from '../pages';
import { isUserAuthenticated } from '../../auth/pages/login/helpers/LoginHelper';
import { HabitacionPage } from '../pages/HabitacionPage';

export const HotelRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container'>
            <Routes>
            <Route path="/" element={isUserAuthenticated() ? (<Navigate to={"/menu"}></Navigate>): (<Navigate to={"/login"}></Navigate>)}></Route>
                <Route path="menu" element={<Menu/>} />
                <Route path="habitaciones" element={<Habitaciones/>}/>
                <Route path='eventos' element={<Eventos/>}/>

                <Route path="event/:id" element={<EventPage/>}/>
                <Route path="habitacionPage" element={<HabitacionPage/>}/>

                <Route path="usuario" element={<Usuario/>}/>

               
            </Routes>
        </div>
    </>
  )
}
