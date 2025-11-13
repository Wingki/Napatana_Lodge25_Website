import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

interface HeaderProps {
  onNavigate: (section: 'about' | 'rooms' | 'dining' | 'bar' | 'activities' | 'testimonials' | 'staff') => void;
  onBookNow: () => void;
}

const NavLink: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button onClick={onClick} className="text-white hover:text-secondary transition-colors duration-300 py-2">
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ onNavigate, onBookNow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <NavLink onClick={() => onNavigate('about')}>About</NavLink>
      <NavLink onClick={() => onNavigate('rooms')}>Rooms</NavLink>
      <NavLink onClick={() => onNavigate('dining')}>Dining</NavLink>
      <NavLink onClick={() => onNavigate('bar')}>Bar</NavLink>
      <NavLink onClick={() => onNavigate('activities')}>Activities</NavLink>
      <NavLink onClick={() => onNavigate('testimonials')}>Testimonials</NavLink>
      <NavLink onClick={() => onNavigate('staff')}>Our Team</NavLink>
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 text-white">
          <img 
            src="https://picsum.photos/id/1075/50/50" 
            alt="Napatana Lodge Logo" 
            className="h-10 w-10 rounded-full object-cover border-2 border-white/30" 
          />
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-wider">
            Napatana Lodge
          </span>
        </a>
        <nav className="hidden lg:flex items-center space-x-8 font-sans">
          {navLinks}
          <button
            onClick={onBookNow}
            className="bg-accent hover:bg-accent-hover text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </button>
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-primary">
          <nav className="flex flex-col items-center space-y-4 px-6 pt-2 pb-6">
            {navLinks}
            <button
              onClick={() => {
                onBookNow();
                setIsMenuOpen(false);
              }}
              className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full w-full transition-colors duration-300"
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;