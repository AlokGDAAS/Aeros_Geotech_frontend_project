import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import Drone_as_service from './pages/Drone_as_service'
import Product from './pages/Product'
import Training from './pages/Training'

function App() {


  return (   
    <div className='App relative max-w-[100vw] px-1'>
     <div style={{position:"fixed", top:"0",zIndex:"10"}}>
      <NavBar/>
     </div>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/drone' element={<Drone_as_service/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/training' element={<Training/>} />
                   
           
        </Routes>
        <Footer/> 
       
      </div>
      
        
    </div>
  )
}

export default App
