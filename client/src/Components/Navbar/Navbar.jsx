import React, { useEffect } from 'react'
import Logo from './Logo/Logo'
import Navmenu from './Navmenu/Navmenu'
import Toggle from '../Buttons/Toggle'
import {useLocation} from 'react-router-dom'


const Navbar = () => {

  const location= useLocation()

  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleFancyClick=() => setMenuOpen(!false)

  useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome=location.pathname === '/';


  return (
    <>
      <div
        className={`w-full z-30 flex justify-between items-center fixed top-0 left-0 transition-all duration-500 px-[2%] sm:px-[4%] ${
          scrolled || !isHome
            ? 'bg-[#066168]/85 backdrop-blur-md shadow-lg border-b border-white/10 py-1'
            : 'bg-gradient-to-b from-[#066168]/60 via-[#066168]/20 to-transparent py-2'
        }`}
      >
          <div className="flex justify-between relative z-2 w-full h-22 items-center px-4">
          <Logo/>
          <Navmenu menuOpen={menuOpen} toggleMenu={toggleMenu}/>
          <Toggle toggleMenu={toggleMenu}/>
          </div>
      </div>
    </>
  )
}

export default Navbar