import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/98 backdrop-blur-sm border-b border-gray-200' : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img 
            src="https://i.imgur.com/kLoCLG2.png" 
            alt="Lockstone Concrete Logo"
            className="h-12 w-auto"
          />
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['services', 'about', 'gallery', 'testimonials', 'contact'].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="font-montserrat font-medium text-deep-charcoal hover:text-construction-orange transition-colors capitalize"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {item}
            </motion.button>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <motion.a 
            href="tel:208-860-7050" 
            className="hidden md:flex items-center space-x-2 bg-construction-orange text-white px-4 py-2 rounded-lg font-montserrat font-semibold hover:bg-orange-600 transition-colors pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-phone"></i>
            <span>(208) 860-7050</span>
          </motion.a>
          
          <motion.button 
            className="md:hidden text-deep-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {['services', 'about', 'gallery', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block font-montserrat font-medium text-deep-charcoal capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
              <a 
                href="tel:208-860-7050" 
                className="block bg-construction-orange text-white px-4 py-2 rounded-lg font-montserrat font-semibold text-center"
              >
                <i className="fas fa-phone mr-2"></i>(208) 860-7050
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
