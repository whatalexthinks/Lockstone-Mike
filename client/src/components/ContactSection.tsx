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

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block bg-construction-orange/10 px-6 py-2 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-construction-orange font-montserrat font-bold text-sm uppercase tracking-wider">
              Free Consultation
            </span>
          </motion.div>
          <h2 className="font-montserrat font-black text-4xl md:text-6xl text-deep-charcoal mb-6">
            GET YOUR FREE ESTIMATE
            <span className="block text-construction-orange text-3xl md:text-5xl mt-2">TODAY</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your property with professional concrete work? Contact
            us for a detailed, no-obligation estimate.
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

        {/* Info Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {[
            {
              icon: "fas fa-map-marker-alt",
              title: "Service Areas",
              description: "Boise, Meridian, Kuna, Nampa, Caldwell",
              bgColor: "bg-steel-blue",
              textColor: "text-white"
            },
            {
              icon: "fas fa-clock",
              title: "Business Hours", 
              description: "Mon-Fri: 7AM-6PM\nSat: 8AM-4PM",
              bgColor: "bg-white",
              textColor: "text-deep-charcoal",
              border: "border border-gray-200 shadow-lg"
            },
            {
              icon: "fas fa-shield-alt",
              title: "Licensed & Insured",
              description: "Fully bonded for your protection",
              bgColor: "bg-construction-orange",
              textColor: "text-white"
            },
            {
              icon: "fas fa-award",
              title: "25+ Years Experience",
              description: "Proven track record of excellence",
              bgColor: "bg-white",
              textColor: "text-deep-charcoal",
              border: "border border-gray-200 shadow-lg"
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className={`p-6 rounded-xl ${item.bgColor} ${item.textColor} ${item.border || ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1), ease: "easeOut" }}
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <div className="text-center">
                <motion.div 
                  className={`w-16 h-16 ${item.bgColor === 'bg-white' ? 'bg-construction-orange text-white' : 'bg-white/20 text-current'} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: 5 }}
                >
                  <i className={`${item.icon} text-xl`}></i>
                </motion.div>
                <h4 className="font-montserrat font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-sm opacity-90 whitespace-pre-line leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          {/* Trust Indicators */}
          <motion.div 
            className="bg-gradient-to-r from-construction-orange to-orange-600 p-8 rounded-2xl text-white text-center shadow-xl"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-montserrat font-bold text-2xl mb-6">Why Choose Us?</h4>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="font-montserrat font-black text-3xl mb-2">500+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div>
                <div className="font-montserrat font-black text-3xl mb-2">25+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="font-montserrat font-black text-3xl mb-2">100%</div>
                <div className="text-sm opacity-90">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action Text */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <h3 className="font-montserrat font-bold text-3xl text-deep-charcoal mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Don't wait - our schedule fills up fast! Call now for your free estimate 
              and let us show you why we're Ada County's most trusted concrete specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a 
                href="tel:208-860-7050"
                className="inline-flex items-center justify-center bg-construction-orange text-white px-8 py-4 rounded-xl font-montserrat font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-phone mr-3"></i>
                Call (208) 860-7050
              </motion.a>
              <motion.div 
                className="inline-flex items-center justify-center bg-deep-charcoal text-white px-8 py-4 rounded-xl font-montserrat font-bold text-lg"
                whileHover={{ scale: 1.05 }}
              >
                <i className="fas fa-clock mr-3"></i>
                Same Day Response
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}