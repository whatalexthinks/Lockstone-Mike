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
      className="relative min-h-screen flex items-center justify-center parallax-bg concrete-texture"
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
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline with typewriter effect */}
          <motion.h1 
            className="font-montserrat font-black text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-4xl md:text-6xl lg:text-7xl mb-2">
              <TypewriterText 
                text="ADA COUNTY'S PREMIER"
                isVisible={isIntersecting}
                speed={100}
                className="block"
              />
            </div>
            <motion.div 
              className="text-3xl md:text-5xl lg:text-6xl text-construction-orange"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 3.5, ease: "easeOut" }}
            >
              CONCRETE EXPERTS
            </motion.div>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 font-roboto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
          >
            Building lasting foundations with 25+ years of proven expertise across Boise, Meridian, Kuna, Nampa & Caldwell
          </motion.p>
          
          {/* Animated counters */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.5, ease: "easeOut" }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatedCounter 
                target={25} 
                suffix="+"
                isVisible={isIntersecting}
                className="text-3xl md:text-4xl font-montserrat font-black text-construction-orange"
              />
              <div className="text-white font-montserrat font-semibold">YEARS EXPERIENCE</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatedCounter 
                target={500} 
                suffix="+"
                isVisible={isIntersecting}
                className="text-3xl md:text-4xl font-montserrat font-black text-construction-orange"
              />
              <div className="text-white font-montserrat font-semibold">PROJECTS COMPLETED</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-montserrat font-black text-construction-orange">100%</div>
              <div className="text-white font-montserrat font-semibold">LICENSED & INSURED</div>
            </motion.div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 5, ease: "easeOut" }}
          >
            <motion.button 
              onClick={scrollToContact}
              className="bg-construction-orange text-white px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-orange-600 transition-all duration-300 pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET FREE ESTIMATE
            </motion.button>
            
            <motion.a 
              href="tel:208-860-7050" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-white hover:text-deep-charcoal transition-all duration-300"
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
