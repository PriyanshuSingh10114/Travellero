import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Index from './Components/Index/Index'
import Footer from './Components/Footer/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import ServiceDetails from './Pages/ServicesDetails'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/services/:id' element={<ServicesDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
