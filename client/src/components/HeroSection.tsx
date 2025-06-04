import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import AnimatedCounter from "./AnimatedCounter";
import TypewriterText from "./TypewriterText";

export default function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center parallax-bg concrete-texture px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24"
      style={{
        backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.6)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
      }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-construction-orange/30 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-steel-blue/40 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-concrete-gray/20 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline with typewriter effect */}
          <motion.h1 
            className="font-montserrat font-black text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl mb-2 leading-tight">
              <TypewriterText 
                text="ADA COUNTY'S PREMIER"
                isVisible={isIntersecting}
                speed={60}
                className="block"
              />
            </div>
            <motion.div 
              className="text-xl sm:text-3xl md:text-5xl lg:text-6xl text-construction-orange leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8, ease: "easeOut" }}
            >
              CONCRETE REPAIR SPECIALISTS
            </motion.div>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 font-roboto font-light leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2, ease: "easeOut" }}
          >
            Expert concrete repair, resurfacing, epoxy coatings & Spread Stone overlays across Boise, Meridian, Kuna, Nampa & Caldwell
          </motion.p>
          
          {/* Animated counters */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.6, ease: "easeOut" }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatedCounter 
                target={25} 
                suffix="+"
                isVisible={isIntersecting}
                className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-black text-construction-orange"
              />
              <div className="text-white font-montserrat font-semibold text-sm sm:text-base">YEARS EXPERIENCE</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatedCounter 
                target={500} 
                suffix="+"
                isVisible={isIntersecting}
                className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-black text-construction-orange"
              />
              <div className="text-white font-montserrat font-semibold text-sm sm:text-base">PROJECTS COMPLETED</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-black text-construction-orange">100%</div>
              <div className="text-white font-montserrat font-semibold text-sm sm:text-base">LICENSED & INSURED</div>
            </motion.div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3, ease: "easeOut" }}
          >
            <motion.button 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-construction-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-montserrat font-bold text-base sm:text-lg hover:bg-orange-600 transition-all duration-300 pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET FREE ESTIMATE
            </motion.button>
            
            <motion.a 
              href="tel:208-860-7050" 
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-montserrat font-bold text-base sm:text-lg hover:bg-white hover:text-deep-charcoal transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-phone mr-2"></i>CALL (208) 860-7050
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
