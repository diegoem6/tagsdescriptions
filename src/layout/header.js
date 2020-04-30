import React, {useContext, useEffect} from 'react';
import authContext from '../context/auth/authContext'


const Header = () => {
    const auContext = useContext(authContext)
    const {user,getUser,logoff} = auContext;

    useEffect(() => {
        getUser()
    }, [])
    
    return (  
        <header className="app-header">
            {user ? <p className="nombre-usuario">Hola <span>{user.name}</span></p> : null}
            
            <nav className="nav-principal">
                <button 
                    className = "btn btn-blank cerrar-sesion"
                    onClick={()=> logoff()}
                >Cerrar Sesión</button>
            </nav>
        </header>
    );
}
 
export default Header;