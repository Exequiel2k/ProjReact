import styles from "./Navbar.scss"
import logo from "../../assets/logo.png"
import CardWidget from "../CardWidget"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="container">
        <div className="Nabvar">
            <div className="img">
                <a href="/">
                    <img src={logo} width="50" height="50" alt="" />
                    <h1>RUNNING</h1>
                </a>
            </div>
            <div className="Links">
                <ul>
                    <li>
                        <Link to={'/inicio'}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={'/sobreNosotros'}>Sobre Nosotros</Link>
                    </li>
                    <li className="product"><Link to={'/productos'}>Productos</Link>
                        <ul className="subMenu">
                            <li>
                                <Link>
                                Zapatillas de Trail
                                </Link>
                            </li>
                                
                            <li>
                                <Link>
                                Zapatillas de Calle
                                </Link>
                  </li>
                            <li>
                                <Link>
                                Zapatillas de pista
                                </Link>

                                </li>
                            <li>
                                <Link>
                                Accesorios
                                </Link>

                                </li>
                        </ul>
                    </li>
                    <li><Link to={'/contacto'}>Contacto</Link></li>
                </ul>

                <CardWidget/>
            </div>
        </div>
       
    </div>
        
  
    )
}

export default Navbar