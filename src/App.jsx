import Navbar from './components/Navbar'
import './App.css'
import Button from './components/Button'
import 'animate.css';
function App() {
  
  
  return (
    <div className='containerTotal'>
      <Navbar/>
   <div className="imgTrail">
    <p className='animate__backInLeft'>Hay dos cosas de las que nunca tienes demasiadas: buenos amigos y buenas zapatillas</p>
    
    <div className="btnTrail">
    <Button />
    </div>
   </div>
 </div>
  )
}

export default App
