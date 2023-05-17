import { Navbar } from '../../ui';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Habitaciones, Menu, Eventos, Usuario } from '../pages';

export const HotelRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container'>
            <Routes>
                <Route path="menu" element={<Menu/>} />
                <Route path="habitaciones" element={<Habitaciones/>}/>
                <Route path='eventos' element={<Eventos/>}/>

                <Route path="usuario" element={<Usuario/>}/>

                <Route path="/" element={<Navigate to="/menu" />}/>
            </Routes>
        </div>
    </>
  )
}
