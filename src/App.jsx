import Navbar from './components/Navbar'
import './App.css'
import Button from './components/Button'
import 'animate.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  
  
  return (
    <div className='containerTotal'>
      <Navbar/>
   <div className="imgTrail">
    <ItemListContainer greeting ='Hay dos cosas de las que nunca tienes demasiadas: buenos amigos y buenas zapatillas' />    
    <div className="btnTrail">
    <Button />
    </div>
   </div>
 </div>
  )
}

export default App
