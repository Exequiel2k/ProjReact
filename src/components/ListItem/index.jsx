import Card from "../Card";

const ListItem = ({productos}) => {
  return (
    <div>
       {productos.map((producto)=>{
         <Card key={producto.id} producto={producto} />
         
       })}
      
    </div>
  )
}

export default ListItem