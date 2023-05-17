import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () =>{
        navigate('/login',{
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Hotel
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link  ${ isActive ? 'active':''}`}
                        to="/menu"
                    >
                        Menu
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link  ${ isActive ? 'active':''}`}
                        to="/habitaciones"
                    >
                        Habitaciones
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link  ${ isActive ? 'active':''}`}
                        to="/eventos"
                    >
                        Eventos
                    </NavLink>
                
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">                    
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link  ${ isActive ? 'active':''}`}
                        to="/usuario"
                    >
                        <span className='nav-item nav-link text-primary'>
                            Username
                        </span>
                    </NavLink>

                    <button className='nav-item nav-link btn'
                    onClick={ onLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}