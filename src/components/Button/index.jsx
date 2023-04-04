import { Link } from "react-router-dom"
import styles from "./Button.scss"

const Button = () => {
  return (
    <div>
      <Link to='./productos'>
         <button className="animate__zoomInDown"> COMPRAR</button>      
      </Link>
        
    </div>
  )
}

export default Button