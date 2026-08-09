import React, { useEffect, useState } from 'react';
import Logo from './Logo/Logo';
import Navmenu from './Navmenu/Navmenu';
import Toggle from '../Buttons/Toggle';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`w-full z-50 flex justify-between items-center fixed top-0 left-0 transition-all duration-500 ease-in-out px-[2%] sm:px-[4%] ${
        scrolled || !isHome
          ? 'bg-[#066168]/90 backdrop-blur-md shadow-lg border-b border-white/10 py-1.5'
          : 'bg-gradient-to-b from-[#066168]/70 via-[#066168]/25 to-transparent py-2.5'
      }`}
    >
      <div className="flex justify-between relative z-2 w-full h-20 items-center px-4">
        <Logo />
        <Navmenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Toggle toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Navbar;