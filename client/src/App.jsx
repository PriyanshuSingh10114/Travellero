import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Index from './Components/Index/Index'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Index/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
