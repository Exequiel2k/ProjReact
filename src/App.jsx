import Navbar from './components/Navbar'
import './App.css'
import Button from './components/Button'
import 'animate.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ListItem from './components/ListItem';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';



function App() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data)=>{
        setProductos(data)
      })
  }, [])
  
  return (
    <div className='containerTotal'>
      <Navbar />
      <div className="imgTrail">
        <ItemListContainer greeting='Hay dos cosas de las que nunca tienes demasiadas: buenos amigos y buenas zapatillas' />
        <div className="btnTrail">
          <Button />
          <ListItem productos={productos}/>
       
        </div>
      </div>
    
      { <Routes>
        <Route path="/productos" element ={<ListItem productos={productos}/>}/>
        <Route path="/" element ={<Navigate to="/inicio" />}/>
        {/* <Route path="/contacto" element ={<Navigate to="/contacto" />}/>
        <Route path="/sobreNosotros" element ={<Navigate to="/sobreNosotros" />}/> */}
      </Routes> }
      </div>
   
   
  )
}

export default App
