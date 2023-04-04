import { useEffect, useState } from "react"
import Card from "../Card"



const ListItem = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data)=>{
        setProductos(data)
      })
  }, [])
  return (
    <div >
       {productos.map((producto)=>{
        return <Card key={producto.id} producto={producto} />

       })}
    </div>
  )
}

export default ListItem