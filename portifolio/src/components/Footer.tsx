import React from 'react';
import Image from 'next/image';

const Logo = () => (
  <div className="w-11 h-11 flex items-center justify-center rounded-full overflow-hidden">
    <Image
      src="/logo.jpg"
      alt="Logo"
      width={48}
      height={48}
      className="rounded-full object-cover"
    />
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <footer className="bg-black text-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0">
             <a href="/" aria-label="Home" className="flex items-center gap-3">
                <Logo />
                <span className="text-xl font-semibold text-white">Theo Diniz</span>
             </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-8" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-base hover:text-green-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-green-400 to-green-700 text-black font-medium py-3 px-6 rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-400 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Theo Diniz. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

