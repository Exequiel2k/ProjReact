import Navbar from './components/Navbar'
import './App.css'
import Button from './components/Button'
import 'animate.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import CardDetail from './components/CardDetail';





function App() {
 
  
  return (
<div>
  <div className='containerTotal'>
      <Navbar />
    <div className="imgTrail">
        <ItemListContainer greeting='Hay dos cosas de las que nunca tienes demasiadas: buenos amigos y buenas zapatillas' />
      <div className="btnTrail">
          <Button />       
    </div>
      </div>

    
  </div>
      <Routes>
          <Route path="/productos" element ={<Productos />}/>
          <Route path="/" element ={<Navigate to="/inicio" />}/>
          <Route path="/contacto" element ={<Contacto />}/>
          <Route path='/productos/:id' element={<CardDetail/>}/>
      </Routes> 
       
  </div>
   
  )
}

export default App
