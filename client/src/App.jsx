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
import Destination from './Pages/Destination'
import DestinationDetails from './Pages/DestinationDetails'
import Tours from './Pages/Tours'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Page404 from './Pages/Page404'
import TourDetails from './Pages/TourDetails'

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
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/destination/:id' element={<DestinationDetails/>}/>
          <Route path='/pricing' element={<PricingPlan/>}/>
          <Route path='/tours' element={<Tours/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/pagenotfound' element={<Page404/>}/>
          <Route path='/tours/:id' element={<TourDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
