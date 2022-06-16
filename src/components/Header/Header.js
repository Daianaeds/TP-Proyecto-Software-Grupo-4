import { useState } from "react";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import swal from "sweetalert";
import './styles.css';
/* import { Buscador } from '../Buscador' */

export const Header = () => {

    const history = useHistory()
    const [log, setLog] = useState(sessionStorage.getItem('token'));

    const handleLogin = () => {
        history.push('/login')
    }

    const handleLogout = () => {
        setLog(sessionStorage.removeItem('token'))
        swal({
            title : 'Deslogueado',
            icon: 'success',
            button: "Ok",
            timer: "1000"
        })
    }
    

    return (
        <>
            <div className="container-header">
                <header className="container">
                    <div className="logo">
                        <Link className="link-img" to='/'>
                            <img src="/assets/img/logo-bg-white.png" width="68px" height="68px" alt="logo" />
                        </Link>
                    </div>
                    <nav className="">
                        <ul className="">
                            <li >
                                <Link className="link" to='/listado'> Productos</Link>
                            </li>
                            <li>
                                <Link className="link" to='/locales'> Locales</Link>
                            </li>
                            <li>
                                <Link className="link" to='/listado?prod=promo'> Promociones</Link>
                            </li>
                            <li>
                                <Link className="link" to='/contacto'> Contactenos</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* <Buscador/> */}
                    {
                        log ? <button onClick={handleLogout}>
                                Logout
                            </button>
                            :
                            <button
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                    }

                </header>
            </div>
            <div className="header-space"></div>
        </>
    )
}   
