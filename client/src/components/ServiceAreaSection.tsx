import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const serviceAreas = [
  {
    name: "BOISE",
    description: "Capital city concrete solutions",
  },
  {
    name: "MERIDIAN", 
    description: "Growing community expertise",
  },
  {
    name: "KUNA",
    description: "Rural concrete specialists",
  },
  {
    name: "NAMPA",
    description: "Canyon County border service",
  },
  {
    name: "CALDWELL",
    description: "Western valley coverage",
  }
];

export default function ServiceAreaSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-deep-charcoal mb-4">
            PROUDLY SERVING ADA COUNTY
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Local expertise you can trust across the greater Boise metropolitan area.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.name}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-construction-orange hover:text-white transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              <motion.i 
                className="fas fa-map-marker-alt text-3xl mb-4 text-construction-orange group-hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <h3 className="font-montserrat font-bold text-lg mb-2">{area.name}</h3>
              <p className="text-sm mb-4 opacity-75">{area.description}</p>
              <motion.button 
                onClick={scrollToContact}
                className="inline-block bg-construction-orange text-white group-hover:bg-white group-hover:text-construction-orange px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Estimate
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
