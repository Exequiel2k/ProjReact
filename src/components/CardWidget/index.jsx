import carrito from "../../assets/carrito.png"
import styles from './CardWidget.scss'

const CardWidget = () => {
  return (
    <div className={styles.CarritoCompras}>
        <img className={styles.carrito}src={carrito} width="40" height="40" alt="" />
        <h1 className="NumberCarrito">1</h1>
    </div>
  )
}

export default CardWidget