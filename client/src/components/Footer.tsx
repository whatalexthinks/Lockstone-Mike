import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-deep-charcoal text-white py-12 concrete-texture">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <img 
                src="https://i.imgur.com/5avbZ8D.png" 
                alt="Lockstone Concrete Logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Ada County's premier concrete contractor with 25+ years of proven excellence in residential and commercial concrete solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-construction-orange rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-facebook-f text-white"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-construction-orange rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-google text-white"></i>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-montserrat font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              {[
                'Driveways',
                'Patios & Walkways', 
                'Foundations',
                'Commercial Projects',
                'Decorative Concrete',
                'Repairs & Restoration'
              ].map((service) => (
                <li key={service}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-construction-orange transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-montserrat font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-construction-orange"></i>
                <a 
                  href="tel:208-860-7050" 
                  className="hover:text-construction-orange transition-colors"
                >
                  (208) 860-7050
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-construction-orange"></i>
                <span>Serving Ada County, Idaho</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-shield-alt text-construction-orange"></i>
                <span>Licensed & Insured</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>&copy; 2024 Lockstone Concrete. All rights reserved. | Ada County's Premier Concrete Experts</p>
        </motion.div>
      </div>
    </footer>
  );
}
