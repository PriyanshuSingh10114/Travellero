import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Index from './Components/Index/Index'
import Footer from './Components/Footer/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import ServiceDetails from './Pages/ServiceDetails'
import Testimonials from './Pages/Testimonials'
import TourGuide from './Pages/TourGuide'
import TourGuideDetails from './Pages/TourGuideDetails'
import Faqs from './Pages/Faqs'
import PricingPlan from './Pages/PricingPlan'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/services/:id' element={<ServiceDetails/>}/>
          <Route path='/testimonials' element={<Testimonials/>}/>
          <Route path='/tour-guide' element={<TourGuide/>}/>
          <Route path='/tourguide/:id' element={<TourGuideDetails/>}/>
          <Route path='/faqs' element={<Faqs/>}/>
          <Route path='/pricing' element={<PricingPlan/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
