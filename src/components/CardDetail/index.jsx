import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button";
import styles from "./cardDetail.module.scss"



const CardDetail = () => {

const [producto, setProducto] = useState({})    
const {id} = useParams();
useEffect(() =>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data)=>{
      setProducto(data)
    })
}, [id]);
  return (
    <div className={styles.container}>
        <h3>{producto.title}</h3>
        <img src={producto.image} alt={producto.title} />
        <p>{producto.description}</p>
        <p>{producto.category}</p>
        <p>${producto.price}</p>
        <p> <Button/></p>

       
    
    </div>
  )
}

export default CardDetail;