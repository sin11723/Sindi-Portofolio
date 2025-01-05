import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Portofolio</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-black-600 hover:text-blue-900">Beranda</a>
            <a href="#about" className="text-black-600 hover:text-blue-900">Tentang</a>
            <a href="#skills" className="text-black-600 hover:text-blue-900">Keahlian</a>
            <a href="#projects" className="text-black-600 hover:text-blue-900">Proyek</a>
            <a href="#certificates" className="text-black-600 hover:text-blue-900">Sertifikat</a>
            <a href="#contact" className="text-black-600 hover:text-blue-900">Kontak</a>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            <a href="https://github.com/sin11723" className="text-gray-600 hover:text-blue-900">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sindi-handayani-24855a28a/?profileId=ACoAAEY0ddgBeGaFASuWwhN4nGgBd4ph9ljzC7I" className="text-gray-600 hover:text-blue-900">
              <Linkedin size={20} />
            </a>
            <a href="mailto:a516epo.2136@example.com" className="text-gray-600 hover:text-blue-900">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-black-600 hover:text-blue-900">Home</a>
              <a href="#about" className="text-black-600 hover:text-blue-900">About</a>
              <a href="#skills" className="text-black-600 hover:text-blue-900">Skills</a>
              <a href="#certificates" className="text-black-600 hover:text-blue-900">Certificates</a>
              <a href="#Projects" className="text-black-600 hover:text-blue-900">Projects</a>
              <a href="#contact" className="text-black-600 hover:text-blue-900">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;