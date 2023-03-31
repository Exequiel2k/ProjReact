import styles from "./Navbar.scss"
import logo from "../../assets/logo.png"
import CardWidget from "../CardWidget"
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
            <div className="Link">
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Sobre Nosotros</a></li>
                    <li className="product"><a  href="/productos">Productos </a> 
                        <ul className="subMenu">
                            <li><a href=''>Zapatillas de Trail</a></li>
                            <li><a href=''>Zapatillas de Calle</a></li>
                            <li><a href=''>Zapatillas de pista</a></li>
                            <li><a href=''>Accesorios</a></li>
                        </ul>
                    </li>
                    <li><a href="contacto">Contacto</a></li>
                </ul>

                <CardWidget/>
            </div>
        </div>
       
    </div>
        
  
    )
}

export default Navbar