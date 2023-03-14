import styles from './ItemListContainer.scss'
const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <p className="animate__lightSpeedInLeft">{greeting}</p>
    </div>
  )
}

export default ItemListContainer


