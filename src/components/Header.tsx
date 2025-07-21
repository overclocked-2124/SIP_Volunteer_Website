import React, { useState, useEffect } from 'react';
import Button from './Button';
import RVCELogoUrl from '../../RVCE_LOGO/RVCE_Logo.png';

const RVCELogo: React.FC = () => (
    <img 
        src={RVCELogoUrl} 
        alt="RVCE Logo" 
        className="w-10 h-10 object-contain"
        style={{ filter: 'brightness(0)' }}
    />
);

const HamburgerIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 12h16m-7 6h7"></path>
    </svg>
);

const CloseIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'What is SIP?', href: '#what-is-sip' },
    { name: 'Why Volunteer?', href: '#why-volunteer' },
    { name: 'Register', href: '#register' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    if(isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-lg border-b border-gray-200/80">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-3" onClick={(e) => e.preventDefault()}>
              <RVCELogo />
              <span className="font-bold text-sm md:text-base tracking-tight uppercase">SIP Volunteers</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-sm cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })} variant="primary">
                Register Now
              </Button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="p-2 text-gray-700 hover:text-primary">
                  <HamburgerIcon/>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-background z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200/80">
            <a href="#" className="flex items-center space-x-3" onClick={(e) => e.preventDefault()}>
              <RVCELogo />
              <span className="font-bold text-sm tracking-tight uppercase">SIP Volunteers</span>
            </a>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-700 hover:text-primary">
                <CloseIcon/>
            </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-3xl font-bold text-gray-800 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
             <Button size="large" onClick={() => handleNavClick(new MouseEvent('click') as any, '#register')} variant="primary">
              Register Now
            </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
