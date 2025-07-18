import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ContactSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-6xl text-deep-charcoal mb-6">
            GET YOUR FREE ESTIMATE
            <span className="block text-construction-orange text-3xl md:text-5xl mt-2">TODAY</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your property with professional concrete work? Call us for a detailed, no-obligation estimate.
          </p>
        </motion.div>

        {/* Main Call Action */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-block p-12 bg-deep-charcoal rounded-3xl text-white shadow-2xl max-w-lg mx-auto"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.i 
              className="fas fa-phone text-6xl text-construction-orange mb-6 block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            <h3 className="font-montserrat font-bold text-3xl mb-6">Call Us Today!</h3>
            <motion.a 
              href="tel:208-860-7050" 
              className="text-4xl font-montserrat font-black text-construction-orange hover:text-orange-400 transition-colors block mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              (208) 860-7050
            </motion.a>
            <p className="text-gray-300 text-lg mb-2">Available 7 days a week</p>
            <p className="text-gray-400 text-sm">Fast response guaranteed</p>
          </motion.div>
        </motion.div>

        {/* Simple Info Row */}
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-3 text-gray-600">
            <i className="fas fa-map-marker-alt text-construction-orange text-xl"></i>
            <span className="font-medium">Serving Ada County</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <i className="fas fa-shield-alt text-construction-orange text-xl"></i>
            <span className="font-medium">Licensed & Insured</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <i className="fas fa-award text-construction-orange text-xl"></i>
            <span className="font-medium">25+ Years Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}