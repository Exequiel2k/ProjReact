import { Link } from "react-router-dom";
import styles from "./card.module.scss";

const Card = ({ producto }) => {
  return (
  
      <Link to={`${producto.id}`}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h3>{producto.title}</h3>
                    <img 
                      src={producto.image}
                      alt={producto.title}
                      width="150"
                      height="200"
                    />
                    <p>$ {producto.price}</p>   
                    <button className={styles.btnCard}>Comprar</button>      
                              

                
                    </div>
                  </div>
    </Link>
  );
};

export default Card;
